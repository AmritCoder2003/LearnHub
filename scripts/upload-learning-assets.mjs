import {createReadStream} from 'node:fs'
import {readdir} from 'node:fs/promises'
import {join} from 'node:path'
import {createClient} from '@sanity/client'

const required = ['NEXT_PUBLIC_SANITY_PROJECT_ID', 'NEXT_PUBLIC_SANITY_DATASET', 'SANITY_API_WRITE_TOKEN']
const missing = required.filter((name) => !process.env[name])
if (missing.length) throw new Error(`Missing environment variables: ${missing.join(', ')}`)

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-08-24',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

const assetDir = join(process.cwd(), 'scripts', 'generated-assets')
const files = (await readdir(assetDir)).filter((file) => file.endsWith('.svg'))

async function getOrUploadAsset(filename) {
  const existing = await client.fetch('*[_type == "sanity.imageAsset" && originalFilename == $filename][0]{_id}', {filename})
  if (existing?._id) return existing._id
  const asset = await client.assets.upload('image', createReadStream(join(assetDir, filename)), {filename, contentType: 'image/svg+xml'})
  return asset._id
}

async function patchImage(type, slug, filename, alt) {
  const document = await client.fetch('*[_type == $type && slug.current == $slug][0]{_id}', {type, slug})
  if (!document?._id) throw new Error(`Could not find ${type} with slug ${slug}`)
  const assetId = await getOrUploadAsset(filename)
  await client.patch(document._id).set({[type === 'course' ? 'coverImage' : 'photo']: {_type: 'image', asset: {_type: 'reference', _ref: assetId}, alt}}).commit()
}

for (const filename of files) {
  const match = filename.match(/^(course|instructor)-(.+)\.svg$/)
  if (!match) continue
  const [, kind, slug] = match
  const type = kind === 'course' ? 'course' : 'instructor'
  await patchImage(type, slug, filename, `${slug.replaceAll('-', ' ')} ${kind} artwork`)
}
console.log(`Linked ${files.length} generated images to Sanity documents.`)