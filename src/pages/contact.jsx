import React from 'react';
import { LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

const Contact = () => {

   const info = {
      name:'Contact',
      title:'Get In Touch',
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent>
            
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default Contact