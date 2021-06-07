// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: 'vnet-macina',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'aa',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    // This will make us see component name in chrome inspect
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        ssr: true,
      },
    },
  ],
}
