const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2025-07-01',
  token: process.env.SANITY_WRITE_TOKEN, // Editor/Manager token
  useCdn: false,
})

async function run() {
  const cats = [
    ['Healthcare','healthcare'],
    ['Asia','asia'],
    ['Emerging Markets','emerging-markets'],
    ['Energy','energy'],
    ['US Stocks','us-stocks'],
    ['Tech','tech'],
    ['Monetary Policy','monetary-policy'],
    ['Investment Strategies','investment-strategies'],
    ['Geopolitics','geopolitics'],
  ]

  await Promise.all(cats.map(([title,slug]) =>
    client.createIfNotExists({
      _type:'category', _id:`category-${slug}`,
      title, slug:{current:slug}
    })
  ))

  await client.createIfNotExists({
    _type:'author', _id:'author-mlt', name:'MLT Research', slug:{current:'mlt-research'}
  })

  await client.createIfNotExists({
    _type:'post', _id:'post-sample-post',
    title:'Sample Post',
    slug:{current:'sample-post'},
    excerpt:'Demo post seeded from script.',
    author:{_type:'reference', _ref:'author-mlt'},
    categories:[{_type:'reference', _ref:'category-tech'}],
    publishedAt: new Date().toISOString(),
    body:[{_type:'block', children:[{_type:'span', text:'Hello from Sanity!'}]}]
  })

  await client.createIfNotExists({
    _type:'specialReport', _id:'report-sample-report',
    title:'Sample Special Report', slug:{current:'sample-report'},
    summary:'Demo special report.',
    publishedAt:new Date().toISOString(),
    body:[{_type:'block', children:[{_type:'span', text:'Report body.'}]}]
  })

  await client.createIfNotExists({
    _type:'homePage', _id:'home-singleton',
    heroTitle:'MLT Global Research',
    heroSubtitle:'Actionable thematic-driven investment analysis',
    featuredPosts:[{_type:'reference', _ref:'post-sample-post'}]
  })

  await client.createIfNotExists({
    _type:'pageStrategy', _id:'strategy-singleton',
    title:'Strategy',
    hero:[{_type:'block', children:[{_type:'span', text:'Our strategy intro.'}]}],
    sections:[{_type:'block', children:[{_type:'span', text:'Section A content.'}]}]
  })

  console.log('Seed complete ✅')
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
