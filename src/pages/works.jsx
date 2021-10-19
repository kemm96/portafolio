import React from 'react';
import { LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

const Works = () => {

   const info = {
      name:'Works',
      title:"Some Works I'Ve Done",
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent>
            
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default Works