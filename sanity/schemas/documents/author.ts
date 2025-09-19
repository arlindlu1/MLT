export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', validation: (R:any) => R.required() },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'image', type: 'image', options: { hotspot: true } },
    { name: 'bio', type: 'array', of: [{ type: 'block' }] },
  ],
  preview: { select: { title: 'name', media: 'image' } },
}
