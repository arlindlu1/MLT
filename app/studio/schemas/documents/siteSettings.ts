export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteTitle', type: 'string' },
    { name: 'logo', type: 'image' },
    { name: 'mainNav', type: 'array', of: [{ type:'menuItem' }] },
    { name: 'footerNav', type: 'array', of: [{ type:'menuItem' }] },
    { name: 'seo', type: 'seo' }
  ]
}
