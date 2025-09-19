export default {
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    { name: 'label', type: 'string', validation:(R:any)=>R.required() },
    { name: 'href', type: 'string', validation:(R:any)=>R.required() },
  ]
}
