require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Buscando Mejorar`,
    description: `Blog.`,
    author: `@buscando`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              //sizeByPixelDensity: false,
              showCaptions: true
            }
          },
        ]
      }
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT, 
      },
    },    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          firestore: true,     
        },     
      },
    },   
    //'gatsby-theme-comments',
    //'gatsby-theme-comments-ui',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Arizonia',
            variants: [`400`, `700`]
          },
        ],
      },
    },       
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-173532675-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
