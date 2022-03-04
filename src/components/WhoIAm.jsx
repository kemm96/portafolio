import React from 'react';   
import styled from 'styled-components';
import { ImageComponent } from './';

/***** Component style *****/
const Container = styled.div`
   width:100%;
   height:100vh;
   display:flex;
   justify-content:center;
   padding-top:8rem;
`
const H2 = styled.h2`
   color: #000001;
   font-size:2.5rem;
`
const FirstHalf = styled.div`
   width:40%;
   height:100%;
   display:flex;
`
const SecondtHalf = styled.div`
   width:40%;
   height:100%;
   display:flex;
   flex-direction:column;
   align-items:center;
   font-size:1.1rem;
   & > p span{
      font-size:1.3rem;
   }
`
const ImageContainer = styled.div`
   margin-top:5rem;
   width:100%;
   height:50%;
   display:flex;
`
/****** ******************** *****/

const WhoIAmComponent = (props) => {

   return(
      <Container>
         <FirstHalf>
            <H2>WHO I AM</H2>
         </FirstHalf>
         <SecondtHalf>
            <p>
               <span>Hello! My name is Kevin Moyano</span><br/><br/> Born in 1996, in Santiago, Chile. I'm a software engineer with a degree from Andres Bello University 
               specialized in building (and occasionally designing) exceptional digital experiences.
               I stand out for my responsibility, speed of learning, ability to work under pressure and good interpersonal relationships. 
               I am constantly improving my programming techniques and learning new technologies.
               Currently, I am focused on building accessible products for several companies.
            </p>
            <ImageContainer>
               <ImageComponent 
                  image='profile.jpg'
                  alt='hola'
               />
            </ImageContainer>
         </SecondtHalf>
      </Container>
   )
}

export default WhoIAmComponent