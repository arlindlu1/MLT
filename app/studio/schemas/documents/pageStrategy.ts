export default {
  name: 'pageStrategy',
  title: 'Strategy Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', initialValue: 'Strategy' },
    { name: 'slug', type: 'slug', options: { source: 'title', slugify: ()=>'strategy' } },
    { name: 'hero', type: 'array', of: [{ type:'block' }] },
    { name: 'sections', type: 'array', of: [{ type:'block' }, { type:'image', options:{hotspot:true} }] },
    { name: 'seo', type: 'seo' },
  ]
}
