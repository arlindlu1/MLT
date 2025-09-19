export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: (R:any) => R.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' }, validation: (R:any)=>R.required() },
    { name: 'description', type: 'text' },
  ],
  preview: { select: { title: 'title' } },
}
