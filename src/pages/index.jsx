import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

/***** Component style *****/
const Div = styled.div`
   width:100vw;
   height:100vh;
   background-color:#000001;
`
/****** ******************** *****/

const Home = () => {

   const info = {
      name:'Home',
      title:'Kevin Moyano',
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={false}>
            <Div/>
         </LayoutComponent>
      </InfoContext.Provider>
   ) 
}

export default Home