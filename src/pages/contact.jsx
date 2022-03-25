import React from 'react';
import styled from 'styled-components';
import { ContactFormComponent, LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

/***** Component style *****/
const Container = styled.div`
   display:flex;
   width:84vw;
   min-height:80vh;
   margin-top:10vh;
   align-items:center;
   justify-content:center;
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
            <Container>
               <ContactFormComponent/>
            </Container>
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default Contact