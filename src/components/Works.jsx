import React from 'react';   
import styled from 'styled-components';
import { FaFolder, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

/***** Component style *****/
const Container = styled.div`
   width:18rem;
   height:18rem;
   border-radius:.5rem;
   padding:1.5rem;
   border: .1rem solid #ee0000;
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
   font-size:1.4rem;
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
   height:50%;
   & > *{
      font-size:1.5rem;
   }
`
const H3 = styled.h3`
   font-size:2rem;
`
const Bottom = styled.div`
   width:100%;
   height:25%;
   display:flex;
   align-items:center;
`
/****** ******************** *****/

const WorksComponent = () => {

   return(
      <Container>
         <Top>
            <Folder/>
            <Links>
               <a href="">
                  <FaExternalLinkAlt/>
               </a>
               <a href="">
                  <FaGithub/>
               </a>
            </Links>
         </Top>
         <Center>
            <H3>Title</H3>
            <p>Description</p>
         </Center>
         <Bottom>
            <span>css-html-java</span>
         </Bottom>        
      </Container>
   )
}

export default WorksComponent