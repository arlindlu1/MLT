// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import schemas from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'MLT Global Research',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,     // set in .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',                                       // the URL path in Next
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },                                // <-- important!
})
