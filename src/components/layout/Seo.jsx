import React, { useContext } from 'react';
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import InfoContext from '../../context/InfoContext';
 
const Seo = () => {
   const query = useStaticQuery(graphql`query {
      site {
         siteMetadata {
            description
            author
            keywords
         }
      }
   }`)

   const info = useContext(InfoContext);
   const infoQuery = query.site.siteMetadata;

   return (
      <Helmet
         htmlAttributes={{
            lang:'en'
         }}
         title={info.title}
         meta={[
            {
               name: `description`,
               content: infoQuery.description,
            },
            {
               name: `keywords`,
               content: infoQuery.keywords,
            },
            {
               name: `author`,
               content: infoQuery.author,
            },
         ]}
      />
   )
}
 
export default Seo