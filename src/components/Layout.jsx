import React from 'react';
import GlobalStyle from '../styles/globalStyle'

const LayoutComponent = (props) => {

   return(
      <>
         <GlobalStyle/>
         <main>
            {props.children}
         </main>
      </>
   )
}

export default LayoutComponent