const siteMetadata = require("./src/utils/siteMetaData")

module.exports = {
    siteUrl: siteMetadata.siteUrl,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        // {
        //   userAgent: 'test-bot',
        //   allow: ['/path', '/path-2'],
        // },
        // {
        //   userAgent: 'black-listed-bot',
        //   disallow: ['/sub-path-1', '/path-2'],
        // },
      ],
    //   additionalSitemaps: [
    //     'https://example.com/my-custom-sitemap-1.xml',
    //     'https://example.com/my-custom-sitemap-2.xml',
    //     'https://example.com/my-custom-sitemap-3.xml',
    //   ],
    },
  }