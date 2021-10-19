import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/globalStyle'
import { LogoComponent } from '.';

/***** Component style *****/
const Header = styled.header`
   position: fixed;
   z-index: 100;
   width: 100%;
   padding:1rem 2rem;
   display:flex;
   justify-content:space-between;
   color: #eeeeee;
   height:10vh;
`
/****** ******************** *****/

const LayoutComponent = (props) => {
   return(
      <>
         <GlobalStyle/>
         <Header>
            <LogoComponent/>
         </Header>
         <main>
            {props.children}
         </main>
      </>
   )
}

export default LayoutComponent