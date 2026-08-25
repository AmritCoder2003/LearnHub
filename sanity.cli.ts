/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = cleanEnvValue(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
const dataset = cleanEnvValue(process.env.NEXT_PUBLIC_SANITY_DATASET)

function cleanEnvValue(value: string | undefined) {
	return value?.trim().replace(/^['"]|['"]$/g, '')
}

export default defineCliConfig({ api: { projectId, dataset } })
