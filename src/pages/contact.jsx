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

const Contact = () => {

   const info = {
      name:'Contact',
      title:'Get In Touch',
      image:'contact.jpg'
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={true}>
            <Div/>
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default Contact