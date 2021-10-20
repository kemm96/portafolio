import React from 'react';
import { LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

const About = () => {

   const info = {
      name:'About',
      title:'About Me',
      image:'about.jpg'
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={true}>
            
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default About