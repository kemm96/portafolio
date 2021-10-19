import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

/***** Component style *****/
const Container = styled.div`
   display: flex;
   justify-content: center;
   @media (min-width: 1024px) {
      ::after{
         content: '';
         position: fixed;
         bottom: 0;
         height: 12vh;
         width: .15rem;
         background-color: #ee0000;
      }
   }
`
const Ul = styled.ul`
   display: flex;
   @media (min-width: 1024px) {
      flex-direction: column;
   }
`
const Li = styled.li`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 3rem;
   height: 3rem;
`
const A = styled.a`
   display:flex;
   font-size: 2rem;
   transition: transform .3s;
   color:#eeeeee;
   
   @media (min-width: 1024px) {
      :hover{
         transform: scale(1.3);
         transition: transform .3s;
         color: #ee0000;
      }
   }
`
/****** ******************** *****/

const SocialNetworksComponent = (props) =>{
   return(
      <Container>
         <Ul>
            <Li>
               <A href='https://github.com/kemoyano23' target='blanck'>
                  <FaGithub/>
               </A>
            </Li>
            <Li>
               <A href='https://www.instagram.com/ke.moyano23/' target='blanck'>
                  <FaInstagram/>
               </A>
            </Li>
            <Li>
               <A href='https://www.linkedin.com/in/kemoyano23/?trk=public-profile-badge-profile-badge-view-profile-cta&originalSubdomain=cl' 
                  target='blanck'>
                  <FaLinkedin/>
               </A>
            </Li>
            <Li>
               <A href='https://twitter.com/kemoyano23' target='blanck'>
                  <FaTwitter/>
               </A>
            </Li>
         </Ul>
      </Container>
   )
}

export default SocialNetworksComponent