import React, { useState } from 'react';
import styled from 'styled-components';
import { SocialNetworksComponent } from '.';
import { Link } from "gatsby"
import { FaEquals } from 'react-icons/fa';

/***** Component style *****/
const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`
const Button = styled.div`
   position: relative;
   z-index: 1;
   cursor: pointer;
   font-size:2.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #ee0000;
   @media (min-width: 1024px) {
      display: none;
   }
`
const Nav = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   background-color: #222222;
   transform: translate3d(0, -100%, 0);
   transition: 0.5s;
   ${({ show }) => show && `
      transform: translate3d(0, 0, 0);
      transition: 0.5s;
   `}
   @media (min-width: 1024px) {
      color:${props => props.black && !props.index ? "#111111" : ""};
      position: relative;
      background-color: transparent;
      transition: 0s;
      transform: translate3d(0, 0, 0);
   }
`
const Ul = styled.ul`
   display: flex;
   flex-direction: column;
   align-items:center;
   justify-content: space-evenly;  
   height: 90%;
   @media (min-width: 1024px) {
      flex-direction: row;
   }
`
const Li = styled.li`
   overflow: hidden;
   & > *{
      display: inline-block;
      font-size: 5rem;
      transform: translate3d(0, 100%, 0);
      transition: transform 0s linear 0.3s;
      ${({ show }) => show && `
         transform: translate3d(0, 0, 0);
         transition: transform 0.4s linear 0.4s;
      `}
      @media (min-width: 1024px) {
         font-size: 1.2rem;
         transform: translate3d(0, 0, 0);
         margin: 0 1rem;
         display: ${props => props.social ? "none" : ""};
         :hover{
            color: #ee0000;
         }
      }
      @media (orientation: landscape) and (max-width: 1023px) {
         font-size: 3rem;
      }
   }
`
/****** ******************** *****/

const NavComponent = () =>{

   const [show,updateShow] = useState(false);

   return(
      <Container>
         <Button onClick={() => updateShow(!show)}><FaEquals/></Button>
         <Nav show={show}>
            <Ul>
               <Li show={show}><Link to="/">HOME</Link></Li>
               <Li show={show}><Link to="/about">ABOUT</Link></Li>
               <Li show={show}><Link to="/works">WORKS</Link></Li>
               <Li show={show}><Link to="/contact">CONTACT</Link></Li>
               <Li show={show} social>
                  <div>
                     <SocialNetworksComponent/>
                  </div>
               </Li>
            </Ul>
         </Nav>
      </Container>
   )
}  

export default NavComponent