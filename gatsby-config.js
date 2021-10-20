module.exports = {
   siteMetadata: {
      title: `Portafolio`,
      description: `My personal web site`,
      author: `ke.moyano23`,
      siteUrl: 'https://www.kevinmoyano.com',
      keywords: 'gatsby, styled-component, personal-webSite'
   },
   plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-react-helmet`,
      {
         resolve: `gatsby-plugin-sharp`,
         options: {
            defaults: { 
               quality: 99,
               placeholder: `blurred`,
            },
         }
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
           name: `images`,
           path: `${__dirname}/src/images`,
         },
      },
   ],
};
