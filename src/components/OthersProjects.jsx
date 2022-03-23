import React from 'react';   
import styled from 'styled-components';
import { FaFolder, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

/***** Component style *****/
const Container = styled.div`
   width:100%;
   min-height:max-content;
   display:flex;
   flex-direction:column;
   align-items:center;
   padding:15rem 0 8rem 0;
`
const ContainerProjects = styled.div`
   width:100%;
   padding:5% 0;
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   @media (min-width: 1024px) {
      width:80%;
   }
`
const Box = styled.div`
   min-width:20rem;
   max-width:20rem;
   height:20rem;
   border-radius:.5rem;
   padding:.5rem 1.5rem;
   border: .1rem solid #ee0000;
   background-color:#dddddd;
   margin:1rem 1rem;
   @media (min-width: 1024px) {
      min-width:18rem;
      max-width:18rem;
      height:18rem;
   }
`
const H2 = styled.h2`
   color: #000001;
   font-size:2.5rem;
   width:80%;
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
   p{
      line-height : 1.4rem;
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

const OthersProjectsComponent = (props) => {

   return(
      <Container>
         <H2>2 - Other Things I’ve Built</H2>
         <ContainerProjects>
            {props.data.map((info, i) => (   
               <Box key={i}>
                  <Top>
                     <Folder/>
                     <Links>
                        {(info.node.frontmatter.external) ? (
                           <a href={info.node.frontmatter.external} target="_blank" rel="noreferrer">
                              <FaExternalLinkAlt/>
                           </a> 
                        ) : ""}
                        {(info.node.frontmatter.github) ? (
                           <a href={info.node.frontmatter.github} target="_blank" rel="noreferrer">
                              <FaGithub/>
                           </a>
                        ) : ""}
                     </Links>
                  </Top>
                  <Center>
                     <H3>{info.node.frontmatter.title}</H3>
                     <p>{info.node.frontmatter.description}</p>
                  </Center>
                  <Bottom>
                     {info.node.frontmatter.tech.map((info, i) => (
                        <span key={i}>{info}</span>
                     ))}
                  </Bottom>        
               </Box>
            ))}
         </ContainerProjects>
      </Container>
   )
}

export default OthersProjectsComponent