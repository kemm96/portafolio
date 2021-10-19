import React from 'react';
import styled from 'styled-components';
import { LayoutComponent } from '../components';
import { Link } from "gatsby"

/***** Component style *****/
const Container = styled.div`
   width:100vw;
   height:100vh;
   display:flex;
   justify-content:center;
   align-items: center;
   flex-direction: column;
   background-color: #000001;
`
const H2 = styled.h2`
   font-size: 12rem;
   color: #ee0000;
`
const Span = styled.span`
   font-size: 3.5rem;
   color:#eeeeee;
   @media (min-width: 768px) {
      font-size: 4rem;
   }
   @media (min-width: 768px) {
      font-size: 4.5rem;
   }
`
const A = styled(Link)`
   border: .15rem solid #ee0000;
   border-radius: 10%;
   color: #ee0000;
   padding: 1rem;
   margin-top: 2rem;
   @media (min-width: 768px) {
      :hover{
         background-color: #ee000033;
      }
   }
`
/****** ******************** *****/

const NotFoundPage = () => {
   return(
      <LayoutComponent>
         <Container>
            <H2>404</H2>
            <Span>Page not found</Span>
            <A to="/" >GO HOME</A>
         </Container>
      </LayoutComponent>
   )
}

export default NotFoundPage