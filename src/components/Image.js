import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageComponent = (props) => {

   const imageQuery = useStaticQuery(graphql`query{
      allFile(filter: {ext: {regex: "/(jpg)/"}}) {
         edges {
            node {
               base
               childImageSharp {
                  gatsbyImageData(transformOptions: {fit: COVER})
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
      <GatsbyImage image={image} alt={props.alt}/>
   )
}

export default ImageComponent