import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageComponent = (props) => {

   const imageQuery = useStaticQuery(graphql`query{
      allFile(filter: {absolutePath: {regex: "/images/"}}) {
         edges {
            node {
               base
               childImageSharp {
                  gatsbyImageData(transformOptions: {fit: COVER})id
               }
            }
         }
      }
   }`)

   const data = imageQuery.allFile.edges.find(edge => {
      return edge.node.base === props.image
   })

   const image = getImage(data.node)

   return (
      <GatsbyImage image={image} alt={props.alt} title={props.title}/>
   )
}

export default ImageComponent