export default {
  name: 'specialReport',
  title: 'Special Report',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: (R:any)=>R.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' }, validation: (R:any)=>R.required() },
    { name: 'summary', type: 'text' },
    { name: 'mainImage', type: 'image', options:{hotspot:true} },
    { name: 'categories', type: 'array', of: [{ type: 'reference', to: [{type:'category'}]}] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image', options:{hotspot:true} }] },
    { name: 'seo', type: 'seo' },
  ],
  preview: { select: { title: 'title', media: 'mainImage' } }
}
