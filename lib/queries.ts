import { groq } from 'next-sanity'

export const settingsQuery = groq`*[_type=="siteSettings"][0]{
  siteTitle, logo, mainNav, footerNav, seo
}`

export const navQuery = groq`*[_type=="siteSettings"][0]{ siteTitle, logo, mainNav, footerNav }`


export const homeQuery = groq`*[_type=="homePage"][0]{
  heroTitle, heroSubtitle, heroCtas, principles,
  featuredPosts[]->{
    title, "slug":slug.current, mainImage, excerpt, publishedAt,
    categories[]-> {title, "slug":slug.current}
  }, seo
}`

export const authorPageQuery = groq`*[_type=="author" && slug.current==$slug][0]{
  name, image, bio,
  "posts": *[_type=="post" && author._ref==^._id]|order(publishedAt desc){
    title,"slug":slug.current,excerpt,mainImage,publishedAt
  }
}`
export const allAuthorsQuery = groq`*[_type=="author"]{ "slug": slug.current }`


export const categoryPageQuery = groq`*[_type=="category" && slug.current==$slug][0]{
  title,
  "posts": *[_type=="post" && references(^._id)]|order(publishedAt desc){
    title, "slug":slug.current, excerpt, mainImage, publishedAt
  },
  "reports": *[_type=="specialReport" && references(^._id)]|order(publishedAt desc){
    title, "slug":slug.current, summary, mainImage, publishedAt
  }
}`

export const allCategoriesQuery = groq`*[_type=="category"]{ "slug": slug.current }`

export const postsQuery = groq`*[_type=="post"]|order(publishedAt desc)[0...20]{
  title, "slug":slug.current, excerpt, mainImage, publishedAt,
  categories[]-> {title, "slug":slug.current}
}`

export const postsByCategoryQuery = groq`
*[_type=="post" && $cat in categories[]->slug.current]|order(publishedAt desc){
  title, "slug":slug.current, excerpt, mainImage, publishedAt,
  categories[]-> {title, "slug":slug.current}
}`

export const postBySlugQuery = groq`*[_type=="post" && slug.current==$slug][0]{
  title, excerpt, mainImage, publishedAt, body, pdfUrl,
  categories[]-> {title, "slug":slug.current}, seo
}`

export const reportsQuery = groq`*[_type=="specialReport"]|order(publishedAt desc){
  title, "slug":slug.current, summary, mainImage, publishedAt,
  categories[]-> {title, "slug":slug.current}
}`

export const reportBySlugQuery = groq`*[_type=="specialReport" && slug.current==$slug][0]{
  title, summary, mainImage, publishedAt, body, seo
}`

export const strategyQuery = groq`*[_type=="pageStrategy"][0]{ title, hero, sections, seo }`

export const searchQuery = groq`
*[_type in ["post","specialReport"]
  && (title match $q || pt::text(body) match $q)]{
    _type, title, "slug":slug.current, _updatedAt
}`
