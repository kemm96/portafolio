import React from 'react';
import styled from 'styled-components';
import { LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

/***** Component style *****/
const Div = styled.div`
   width:100vw;
   height:100vh;
   background-color:#eeeeee;
`
/****** ******************** *****/

const Works = () => {

   const info = {
      name:'Works',
      title:"Some Works I'Ve Done",
      image:'works.jpg'
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={true}>
            <Div/>
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default Works