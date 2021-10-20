import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/globalStyle'
import { FrontComponent, LogoComponent, NavComponent, SocialNetworksComponent, Seo } from './';

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
               <FrontComponent
                  title={props.title}
                  image={props.image} 
                  alt={props.name}
               />
            ) : "" }
            {props.children}
         </main>
         <Aside>
            <SocialNetworksComponent/>
         </Aside>
      </>
   )
}

export default LayoutComponent