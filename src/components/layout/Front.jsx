import React, { useContext } from 'react';
import styled from 'styled-components';
import { ImageComponent } from '../';
import InfoContext from '../../context/InfoContext';

/***** Component style *****/
const Container = styled.div`
   position:relative;
   display: grid;
   grid-template-columns: 100vw;
   grid-template-rows: 60vh 40vh;
   font-size: 2.5rem;
   overflow:hidden;
   background-color:#000001;
   @media (min-width: 1024px) {
      grid-template-columns: 40vw 60vw;
      grid-template-rows: 100vh;
      font-size: 3rem;
   }
   @media (orientation: landscape) and (max-width: 1023px) {
      font-size: 2rem;
   }
`
const BoxTitle= styled.div`
   grid-column: 1 / 2;
   grid-row: 2 / 3;
   display: flex;
   justify-content:initial;
   flex-direction: column;
   z-index: 10;
   margin-left: 10vw;
   @media (min-width: 1024px) {
      margin-left: 15vw;
      justify-content:center;
      grid-row: 1 / 2;
   }
   @media (orientation: landscape) and (max-width: 1023px) {
      flex-direction: row;
      align-items:center;
   }
`
const H2 = styled.h2`
   color: #eeeeee;
   @media (min-width: 1024px) {
      width:40vw;
   }
`
const Lines = styled.div`
   width: 10rem;
   height: 1.5rem;
   position: relative;
   color:red;
   ::after{
      position: absolute;
      content: "";
      top: 0;
      height: .2rem;
      width: 100%;
      background-color: #ee0000;
   }
   ::before{
      position: absolute;
      content: "";
      bottom: 0;
      left: 30%;
      height: .2rem;
      width: 100%;
      background-color: #ee0000;
   }
`
/****** ******************** *****/

const FrontPageComponent = () =>{

   const info = useContext(InfoContext);

   return(
      <Container>
         <ImageComponent 
            image={info.image}
            alt={info.name}
         />
         <BoxTitle>
            <div>
               <H2>{info.title}</H2>
               <Lines/>
            </div>
         </BoxTitle>
      </Container>
   )
}

export default FrontPageComponent