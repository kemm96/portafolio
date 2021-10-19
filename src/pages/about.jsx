import React from 'react';
import { LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

const About = () => {

   const info = {
      name:'About',
      title:'About Me',
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent>
            
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default About