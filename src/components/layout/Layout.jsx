import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/globalStyle'
import { ArrowComponent, FooterComponent, FrontComponent, LogoComponent, NavComponent, Seo, SocialNetworksComponent } from './';
import BlackContext from '../../context/BlackContext';
/***** Component style *****/
const Header = styled.header`
   position: fixed;
   z-index: 100;
   width: 100%;
   padding:1rem 2rem;
   display:flex;
   justify-content:space-between;
   color: #eeeeee;
   height:8vh;
   ${({ background }) => background && `
      background-color:#eeeeee;
   `}
`
const Aside = styled.aside`
   display:none;
   
   @media (min-width: 1024px) {   
      color: #eeeeee;
      position: fixed;
      bottom: 12vh;
      left: 0;
      display: flex;
      justify-content: center;
      width: 8vw;
   }
`
const Main = styled.main`
   display:flex;
   flex-direction:column;
   align-items:center;
`
const Footer = styled.footer`
   display:flex;
   align-items:center;
   justify-content:center;
   width: 100%;
   height:10vh;
   margin: 1rem;
`
/****** ******************** *****/

const LayoutComponent = (props) => {

   const [black, setBlack] = useState({
      header:false,
      gitHub:false,
      instagram:false,
      linkedin:false,
      twitter:false,
      arrow:false
   });

   const changeBlack = () =>{
      if(window.scrollY >= 65){
         setBlack({
            ...black,
            arrow:true
         }) 
         if(window.scrollY >= 115){
            setBlack({
               ...black,
               twitter:true,
               arrow:true
            }) 
            if(window.scrollY >= 165){
               setBlack({
                  ...black,
                  linkedin:true,
                  twitter:true,
                  arrow:true
               })
               if(window.scrollY >= 215){
                  setBlack({
                     ...black,
                     instagram:true,
                     linkedin:true,
                     twitter:true,
                     arrow:true
                  })
                  if(window.scrollY >= 265){
                     setBlack({
                        ...black,
                        gitHub:true,
                        instagram:true,
                        linkedin:true,
                        twitter:true,
                        arrow:true
                     })
                     if(window.scrollY >= window.innerHeight -30){
                        setBlack({
                           ...black,
                           header:true,
                           gitHub:true,
                           instagram:true,
                           linkedin:true,
                           twitter:true,
                           arrow:true
                        }) 
                     }
                  } 
               } 
            }
         }
      }else{
         setBlack({
            ...black,
            arrow:false
         }) 
      }
   }

   useEffect(() => {
      changeBlack();
      window.addEventListener("scroll", changeBlack)
      return () => {
         window.removeEventListener("scroll", changeBlack)
      }
   }, [])

   const color = {
      header:black.header,
      gitHub:black.gitHub,
      instagram:black.instagram,
      linkedin:black.linkedin,
      twitter:black.twitter,
      arrow:black.arrow,
   }

   return(
      <BlackContext.Provider value={color}>
         <GlobalStyle/>
         <Seo/>
         <Header background={black.header}>
            <LogoComponent/>
            <NavComponent/>
         </Header>
         <Main>
            {(props.front) ? (
               <>
                  <FrontComponent/>
                  <ArrowComponent/>
               </>
            ) : "" }
            {props.children}
         </Main>
         <Aside>
            <SocialNetworksComponent/>
         </Aside>
         {(props.front) ? (
               <Footer>
                  <FooterComponent/>
               </Footer>
         ) : "" }
      </BlackContext.Provider>
   )
}

export default LayoutComponent