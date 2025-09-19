export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    { name: 'title', type: 'string', validation:(R:any)=>R.required() },
    { name: 'href', type: 'string', validation:(R:any)=>R.required() },
  ]
}
