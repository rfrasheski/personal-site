const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ryan Frasheski Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Ryan Frasheski', // Alternative Site title for SEO
  siteTitleShort: 'Ryan Frasheski', // short_name for manifest
  siteHeadline: 'Ryan Frasheski Software Development Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://ryanfrasheski.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Ryan Frasheski Software Development Portfolio',
  author: 'Ryan Frasheski', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@rfrasheski', // Twitter Username
  ogSiteName: 'rfrasheski', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
