import React from 'react';
import styled from 'styled-components';
import { LayoutComponent, SkillsComponent, WhoIAmComponent } from '../components';
import InfoContext from '../context/InfoContext';

/***** Component style *****/
const Container = styled.div`
   display:flex;
   width:84vw;
   flex-direction:column;
`
/****** ******************** *****/

const About = () => {

   const info = {
      name:'About',
      title:'ABOUT ME',
      image:'about.jpg'
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={true}>
            <Container>
               <WhoIAmComponent/>
               <SkillsComponent/>
            </Container>
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default About