import React from 'react';   
import styled from 'styled-components';
import { ImageComponent } from './';

/***** Component style *****/
const Container = styled.div`
   width:100%;
   min-height:max-content;
   display:flex;
   flex-direction:column;
   justify-content:center;
   padding-top:10rem;
   @media (min-width: 1024px) {
      flex-direction:row;
   }
`
const H2 = styled.h2`
   color: #000001;
   font-size:2.5rem;
`
const FirstHalf = styled.div`
   width:100%;
   height:100%;
   display:flex;
   padding:5% 15%;
   @media (min-width: 1024px) {
      padding:0;
      width:40%;
      height:100%;
   }
`
const SecondtHalf = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   font-size:1.1rem;
   text-align: justify;
   padding:5% 15%;
   & > p{
      margin-bottom:5rem
   }
   & > p span{
      font-size:1.3rem;
   }
   & > div{
      box-shadow: 10px 10px 20px #111111;
   }
   @media (min-width: 1024px) {
      padding:0;
      width:40%;
      height:100%;
      & > div{
         box-shadow: 20px 20px 30px #111111;
      }
   }
`
/****** ******************** *****/

const WhoIAmComponent = () => {

   return(
      <Container>
         <FirstHalf>
            <H2>1 - WHO I AM</H2>
         </FirstHalf>
         <SecondtHalf>
            <p>
               <span>HELLO! MY NAME IS KEVIN MOYANO</span><br/><br/> Born in 1996, in Santiago, Chile. I'm a software engineer with a degree from Andres Bello University 
               specialized in building (and occasionally designing) exceptional digital experiences.
               I stand out for my responsibility, speed of learning, ability to work under pressure and good interpersonal relationships. 
               I am constantly improving my programming techniques and learning new technologies.
               Currently, I am focused on building accessible products for several companies.
            </p>
            <ImageComponent 
               image='profile.jpg'
               alt='Kevin Moyano'
               title='Kevin Moyano'
            />            
         </SecondtHalf>
      </Container>
   )
}

export default WhoIAmComponent