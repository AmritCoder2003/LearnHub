import {mkdir, writeFile} from 'node:fs/promises'
import {join} from 'node:path'

const outputDir = join(process.cwd(), 'scripts', 'generated-assets')

const courses = [
  ['next-js-production', 'NEXT.JS', 'PRODUCTION', '#0f172a', '#22d3ee'],
  ['docker-for-developers', 'DOCKER', 'ESSENTIALS', '#0f766e', '#fbbf24'],
  ['typescript-deep-dive', 'TYPESCRIPT', 'DEEP DIVE', '#1d4ed8', '#93c5fd'],
  ['react-accessibility', 'REACT', 'ACCESSIBLE UI', '#166534', '#86efac'],
  ['python-data-analysis', 'PYTHON', 'DATA ANALYSIS', '#9a3412', '#fdba74'],
  ['kubernetes-fundamentals', 'KUBERNETES', 'FUNDAMENTALS', '#7c2d12', '#fca5a5'],
  ['react-native', 'REACT NATIVE', 'IN PRACTICE', '#115e59', '#5eead4'],
  ['sql-analytics', 'SQL', 'FOR ANALYTICS', '#581c87', '#d8b4fe'],
  ['git-github', 'GIT + GITHUB', 'WORKFLOW', '#9f1239', '#fda4af'],
  ['aws-fundamentals', 'AWS', 'FUNDAMENTALS', '#854d0e', '#fde047'],
]

const instructors = [
  ['maya-patel', 'MAYA PATEL', '#0891b2', '#cffafe'],
  ['jordan-lee', 'JORDAN LEE', '#0f766e', '#ccfbf1'],
  ['sam-rivera', 'SAM RIVERA', '#2563eb', '#dbeafe'],
  ['elena-garcia', 'ELENA GARCIA', '#16a34a', '#dcfce7'],
  ['marcus-chen', 'MARCUS CHEN', '#ea580c', '#ffedd5'],
  ['priya-nair', 'PRIYA NAIR', '#dc2626', '#fee2e2'],
  ['avery-williams', 'AVERY WILLIAMS', '#0d9488', '#ccfbf1'],
  ['noah-singh', 'NOAH SINGH', '#9333ea', '#f3e8ff'],
  ['riley-brooks', 'RILEY BROOKS', '#e11d48', '#ffe4e6'],
  ['taylor-kim', 'TAYLOR KIM', '#ca8a04', '#fef9c3'],
]

function escapeXml(value) {
  return value.replace(/[&<>"']/g, (character) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'}[character]))
}

function courseSvg(label, subtitle, background, accent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><rect width="1200" height="675" fill="${background}"/><circle cx="1000" cy="95" r="210" fill="${accent}" opacity=".22"/><circle cx="1080" cy="530" r="280" fill="${accent}" opacity=".12"/><path d="M0 535C205 430 330 610 545 500S900 400 1200 540V675H0Z" fill="${accent}" opacity=".14"/><rect x="74" y="74" width="96" height="8" rx="4" fill="${accent}"/><text x="74" y="340" fill="#fff" font-family="Georgia,serif" font-size="72" font-weight="700">${escapeXml(label)}</text><text x="78" y="405" fill="${accent}" font-family="Arial,sans-serif" font-size="30" font-weight="700" letter-spacing="5">${escapeXml(subtitle)}</text><text x="78" y="590" fill="#fff" opacity=".72" font-family="Arial,sans-serif" font-size="18" letter-spacing="3">LEARNHUB / COURSE COVER</text></svg>`
}

function instructorSvg(name, background, highlight) {
  const initials = name.split(' ').map((part) => part[0]).join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" rx="256" fill="${background}"/><circle cx="256" cy="210" r="104" fill="${highlight}"/><path d="M112 474c12-115 67-171 144-171s132 56 144 171" fill="${highlight}"/><path d="M172 205c9-85 45-130 98-130 65 0 95 61 91 134-28-34-62-49-108-49-26 28-53 42-81 45Z" fill="${background}" opacity=".8"/><circle cx="218" cy="217" r="10" fill="${background}"/><circle cx="294" cy="217" r="10" fill="${background}"/><path d="M226 265c20 16 40 16 60 0" fill="none" stroke="${background}" stroke-width="9" stroke-linecap="round"/><text x="256" y="450" text-anchor="middle" fill="${background}" font-family="Arial,sans-serif" font-size="34" font-weight="700" letter-spacing="4">${escapeXml(initials)}</text></svg>`
}

await mkdir(outputDir, {recursive: true})
for (const [slug, label, subtitle, background, accent] of courses) {
  await writeFile(join(outputDir, `course-${slug}.svg`), courseSvg(label, subtitle, background, accent))
}
for (const [slug, name, background, highlight] of instructors) {
  await writeFile(join(outputDir, `instructor-${slug}.svg`), instructorSvg(name, background, highlight))
}
console.log(`Generated ${courses.length + instructors.length} SVG assets in ${outputDir}`)