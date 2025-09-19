export default {
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  fields: [
    { name: 'topic', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'message', type: 'text' },
    { name: 'submittedAt', type: 'datetime' },
  ],
  readOnly: true,
  preview: { select: { title: 'name', subtitle: 'email' } },
}
