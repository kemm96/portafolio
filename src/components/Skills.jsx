import React from 'react';   
import styled from 'styled-components';

/***** Component style *****/
const Container = styled.div`
   width:100%;
   height:100vh;
   background-color:#00ee00;
`
const H2 = styled.h2`
   color: #000001;
   font-size:2.5rem;
   margin: 3rem;
`
/****** ******************** *****/

const SkillsComponent = (props) => {

   return(
      <Container>
         <H2>TECHNOLOGY EXPERIENCE</H2>
      </Container>
   )
}

export default SkillsComponent