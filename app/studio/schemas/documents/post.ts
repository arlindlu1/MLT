export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: (R:any)=>R.required() },
    { name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (R:any)=>R.required() },
    { name: 'excerpt', type: 'text' },
    { name: 'mainImage', type: 'image', options: { hotspot: true } },
    { name: 'author', type: 'reference', to: [{type: 'author'}], validation: (R:any)=>R.required() },
    { name: 'categories', type: 'array', of: [{ type: 'reference', to: [{type:'category'}]}], validation: (R:any)=>R.min(1) },
    { name: 'publishedAt', type: 'datetime', initialValue: () => new Date().toISOString() },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image', options:{hotspot:true} }] },
    { name: 'pdfUrl', type: 'url', title: 'Download PDF (optional)' },
    { name: 'seo', type: 'seo' },
  ],
  preview: { select: { title: 'title', media: 'mainImage' } }
}
