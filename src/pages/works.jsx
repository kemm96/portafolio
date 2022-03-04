import React from 'react';   
import styled from 'styled-components';
import { LayoutComponent, WorksComponent } from '../components';
import InfoContext from '../context/InfoContext';
import { graphql } from 'gatsby'

/***** Component style *****/
const H2 = styled.h2`
   color: #000001;
   font-size:2.5rem;
   margin: 3rem;
`
const Container = styled.div`
   display:flex;
   margin-bottom:3rem;
   min-width:min-content;
   max-width:80%;
   justify-content:center;
   flex-wrap:wrap;
`
/****** ******************** *****/

const Works = ({ data }) => {

   const projects = data.allMarkdownRemark.edges;

   const info = {
      name:'Works',
      title:"SOME WORKS I'VE DONE",
      image:'works.jpg'
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={true}>
            <H2>NOTEWORTHY PROJECTS</H2>
            <Container>
               {projects.map((info, i) => (
                  <WorksComponent key={i} data={info}/>
               ))}
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
            }
         }
      }
   }
}`

export default Works