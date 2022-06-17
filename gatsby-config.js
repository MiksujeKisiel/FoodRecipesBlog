require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: '@SebastianM Food Recipes app',
    description:
      '',
    keywords: '',
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-react-svg',
      ptions: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-react-helmet',
      'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    `gatsby-plugin-styled-components`,
     

    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Montserrat\:300,400,400i,500,600,700,800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
  ],
}
