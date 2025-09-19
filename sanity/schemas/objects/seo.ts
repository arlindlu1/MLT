export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'ogImage', type: 'image', options: { hotspot: true } },
  ],
}
