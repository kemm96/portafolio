import React from 'react';
import { LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

const Contact = () => {

   const info = {
      name:'Contact',
      title:'Get In Touch',
      image:'contact.jpg'
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={true}>
            
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default Contact