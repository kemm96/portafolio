import React from 'react';   
import styled from 'styled-components';
import { LayoutComponent, OthersProjectsComponent, NoteworthyProjectsComponent  } from '../components';
import InfoContext from '../context/InfoContext';
import { graphql } from 'gatsby'

/***** Component style *****/
const Container = styled.div`
   display:flex;
   width:84vw;
   flex-direction:column;
`
/****** ******************** *****/

const Works = ({ data }) => {

   const projects = data.allMarkdownRemark.edges;
   const neteworthyProjects = [];
   const otherProjects = [];

   for(let aux of projects){
      if (aux.node.frontmatter.featured) {
         neteworthyProjects.push(aux)
      }else{
         otherProjects.push(aux)
      }
   }

   const info = {
      name:'Works',
      title:"SOME WORKS I'VE DONE",
      image:'works.jpg'
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={true}>
            <Container>
               <NoteworthyProjectsComponent  data={neteworthyProjects}/> 
               <OthersProjectsComponent data={otherProjects}/>
            </Container>
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export const query = graphql`query{
   allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/projects/"}}
      sort: {fields: frontmatter___title, order: ASC}
   ){
      edges {
         node {
            frontmatter {
               date
               external
               github
               tech
               title
               description
               featured
               img
            }
         }
      }
   }
}`

export default Works