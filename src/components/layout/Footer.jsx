import React, { useState, useEffect } from 'react';   
import styled from 'styled-components';

/***** Component style *****/
const Container = styled.a`
   display:flex;
   flex-direction:column;
   align-items:center;
   border: .1rem dashed #000001;
   padding:.5rem 1rem;
   @media (min-width: 1024px) {
      :hover{
         color: #ee0000;
         border-color:#ee0000
      }
   }
`

/****** ******************** *****/

const FooterComponent = () => {

   const [starsCount, setStarsCount] = useState(0)

   useEffect(() => {
      // get data from GitHub api
      fetch(`https://api.github.com/repos/kemoyano23/portafolio`)
         .then(response => response.json())
         .then(data => {
            setStarsCount(data.stargazers_count)
         })
   }, [])

   return(
      <Container href="https://github.com/kemoyano23/portafolio" target="_blank">
         <p>Designed & Built by Kevin Moyano</p>
         <p>★ {starsCount}</p>
      </Container>
   )
}

export default FooterComponent