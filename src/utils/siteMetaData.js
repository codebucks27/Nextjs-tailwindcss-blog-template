/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
    title: 'Next.js Blog With Tailwind CSS and Contentlayer',
    author: 'CodeBucks',
    headerTitle: 'TailwindBlog',
    description: 'A blog created with Next.js, Tailwind.css and contentlayer.',
    language: 'en-us',
    theme: 'system', // system, dark or light
    siteUrl: 'https:/developer-blog.vercel.app',
    siteLogo: '/logo.png',
    socialBanner: '/static/images/twitter-card.png',
    email: 'codebucks27@gmail.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://www.linkedin.com',
    locale: 'en-US',

    search: {
      provider: 'kbar', // kbar or algolia
      kbarConfig: {
        searchDocumentsPath: 'search.json', // path to load documents to search
      },
      // provider: 'algolia',
      // algoliaConfig: {
      //   // The application ID provided by Algolia
      //   appId: 'R2IYF7ETH7',
      //   // Public API key: it is safe to commit it
      //   apiKey: '599cec31baffa4868cae4e79f180729b',
      //   indexName: 'docsearch',
      // },
    },
  }
  
  module.exports = siteMetadata