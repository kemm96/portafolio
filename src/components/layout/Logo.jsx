import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby'
import InfoContext from '../../context/InfoContext';
import BlackContext from '../../context/BlackContext';

/***** Component style *****/
const Container = styled.div`
   display: flex;
   align-items: center;
   font-size: 1.2rem;
`
const Top = styled.div`
   display: flex;
`
const Bottom = styled.div`
   display: flex;
   align-items:center;
`
const Span = styled.span`
   color:${props => props.color};

   ${({ black }) => black && `
      color:#000001;
   `}
 `
const cursor = keyframes`
   0% {background-color: transparent;}
   50% {background-color: #ee0000;}
   100%{background-color: transparent;}
`
const Cursor = styled.div`
   width: .5rem;
   height: 1rem;
   animation: ${cursor} 1s infinite;
   margin-left: .5rem;
`
/****** ******************** *****/

const LogoComponent = () => {

   const info = useContext(InfoContext);
   const color = useContext(BlackContext);

   return(
      <Container>
         <Link to='/'>
            <Top>
               <Span color='#ee0000'>┌──[</Span>
               <Span color='#eeeeee' black={color.header}>Kevin </Span>
               <Span color='#ee0000'>㉿</Span>
               <Span color='#eeeeee' black={color.header}>Moyano</Span>
               <Span color='#ee0000'>]─[</Span>
               <Span color='#00ee00'>~</Span>
               <Span color='#ee0000'>]</Span>
            </Top>
            <Bottom>
               <Span color='#ee0000'>└──[</Span>
               <Span color='#00ee00'>{info.name}</Span>
               <Span color='#ee0000'>]──</Span>
               <Span color='#00ee00'>$</Span>
               <Cursor/>
            </Bottom>  
         </Link>
      </Container>
   )
}

export default LogoComponent