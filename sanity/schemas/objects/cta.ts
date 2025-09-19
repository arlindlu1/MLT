export default {
  name: 'cta',
  title: 'Call To Action',
  type: 'object',
  fields: [
    { name: 'label', type: 'string', validation: (R:any)=>R.required() },
    { name: 'href', type: 'string', validation: (R:any)=>R.required() },
  ],
  preview: { select: { title: 'label', subtitle: 'href' } },
}
