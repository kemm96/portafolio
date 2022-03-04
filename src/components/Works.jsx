import React from 'react';   
import styled from 'styled-components';
import { FaFolder, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

/***** Component style *****/
const Container = styled.div`
   min-width:20rem;
   max-width:20rem;
   height:20rem;
   border-radius:.5rem;
   padding:1.5rem;
   border: .1rem solid #ee0000;
   margin:1rem;
   background-color:#dddddd;
`
const Top = styled.div`
   width:100%;
   height:25%;
   display:flex;
   align-items:center;
   justify-content:space-between;
`
const Folder = styled(FaFolder)`
   font-size:3rem;
`
const Links = styled.div`
   font-size:1.8rem;
   & > *{
      margin-left:.5rem;
      transition: .3s;
      @media (min-width: 1024px) {
         :hover{
            color:#ee0000;
            transition: .3s;
         }
      }
   }
`
const Center = styled.div`
   width:100%;
   height:65%;
   & > *{
      font-size:1.2rem;
   }
`
const H3 = styled.h3`
   font-size:1.5rem;
`
const Bottom = styled.div`
   width:100%;
   height:10%;
   display:flex;
   align-items:center;
   & > *{
      margin-right:.5rem;
   }
`
/****** ******************** *****/

const WorksComponent = (props) => {

   const data = props.data.node.frontmatter

   return(
      <Container>
         <Top>
            <Folder/>
            <Links>
               {(data.external) ? (
                  <a href={data.external} target="_blank">
                     <FaExternalLinkAlt/>
                  </a> 
               ) : ""}
               {(data.github) ? (
                  <a href={data.github} target="_blank">
                     <FaGithub/>
                  </a>
               ) : ""}
            </Links>
         </Top>
         <Center>
            <H3>{data.title}</H3>
            <p>{data.description}</p>
         </Center>
         <Bottom>
            {data.tech.map((info, i) => (
               <span key={i}>{info}</span>
            ))}
         </Bottom>        
      </Container>
   )
}

export default WorksComponent