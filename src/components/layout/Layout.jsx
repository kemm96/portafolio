import React from 'react';
import styled, { keyframes } from 'styled-components';
import GlobalStyle from '../../styles/globalStyle'
import { FooterComponent, FrontComponent, LogoComponent, NavComponent, Seo, SocialNetworksComponent } from './';
import { FaArrowCircleDown } from 'react-icons/fa';

/***** Component style *****/
const Header = styled.header`
   position: fixed;
   z-index: 100;
   width: 100%;
   padding:1rem 2rem;
   display:flex;
   justify-content:space-between;
   color: #eeeeee;
   height:10vh;
`
const Aside = styled.aside`
   display:none;
   @media (min-width: 1024px) {
      position: fixed;
      bottom: 12vh;
      left: 0;
      display: flex;
      justify-content: center;
      width: 8vw;
   }
`
const Footer = styled.footer`
   display:flex;
   align-items:center;
   justify-content:center;
   width: 100%;
   height:10vh;
   margin: 1.5rem 0;
`
const arrow = keyframes`
   0%{transform: scale(1);}
   50%{transform: scale(.8);}
   100%{transform: scale(1);}
`
const Arrow = styled.div`
   position:fixed;
   animation: ${arrow} 1.5s infinite;
   bottom:11vh;
   right:4vw;
   color:#eeeeee;
   font-size:2rem;
   transition: .3s;
   /* transform:rotate(180deg); */
   @media (min-width: 1024px) {
      :hover{
         transform: scale(1.3);
         animation:none;
         transition:.3s;
         color:#ee0000;
      }
   }
`
/****** ******************** *****/

const LayoutComponent = (props) => {
   return(
      <>
         <GlobalStyle/>
         <Seo/>
         <Header>
            <LogoComponent/>
            <NavComponent/>
         </Header>
         <main>
            {(props.front) ? (
               <FrontComponent/>
            ) : "" }
            {props.children}
         </main>
         <Aside>
            <SocialNetworksComponent/>
         </Aside>
         {(props.front) ? (
            <>
               <Footer>
                  <FooterComponent/>
               </Footer>
               <Arrow>
                  <FaArrowCircleDown/>
               </Arrow>
            </>   
         ) : "" }
      </>
   )
}

export default LayoutComponent