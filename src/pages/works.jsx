import React from 'react';
import { LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

const Works = () => {

   const info = {
      name:'Works',
      title:"Some Works I'Ve Done",
      image:'works.jpg'
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={true}>
            
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default Works