export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    { name: 'heroTitle', type: 'string' },
    { name: 'heroSubtitle', type: 'text' },
    { name: 'heroCtas', type: 'array', of: [{ type: 'cta' }] },
    { name: 'principles', type: 'array', of: [{ type: 'block' }] },
    { name: 'featuredPosts', type: 'array', of: [{ type: 'reference', to: [{ type: 'post' }] }] },
    { name: 'seo', type: 'seo' },
  ],
  preview: { select: { title: 'heroTitle' } },
}
