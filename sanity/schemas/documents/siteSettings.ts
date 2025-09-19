export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteTitle', type: 'string', validation: (R:any)=>R.required() },
    { name: 'logo', type: 'image', options: { hotspot: true } },
    { name: 'mainNav', title: 'Main Navigation', type: 'array', of: [{ type: 'menuItem' }] },
    { name: 'footerNav', title: 'Footer Navigation', type: 'array', of: [{ type: 'menuItem' }] },
    { name: 'seo', type: 'seo' },
  ],
  preview: { select: { title: 'siteTitle', media: 'logo' } },
}
