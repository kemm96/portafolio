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

const About = () => {

   const info = {
      name:'About',
      title:'About Me',
      image:'about.jpg'
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={true}>
            <Div/>
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default About