import React from 'react';
import { LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

const Home = () => {

   const info = {
      name:'Home',
      title:'Kevin Moyano',
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent>
            
         </LayoutComponent>
      </InfoContext.Provider>
   ) 
}

export default Home