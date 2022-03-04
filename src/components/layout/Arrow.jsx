import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaArrowCircleDown } from 'react-icons/fa';
import BlackContext from '../../context/BlackContext';

/***** Component style *****/
const Arrow = styled.div`
   position:fixed;
   display:flex;
   justify-content:center;
   cursor: pointer;
   bottom:5vh;
   right:0;
   color:#eeeeee;
   font-size:3rem;
   transition: .5s;
   z-index:100;
   width:8vw;

   @media (min-width: 1024px) {
      :hover{
         transform:scale(1.3);
         color:#ee0000;
         transition:.5s;
      }
   }

   ${({ black }) => black && `
      transform: rotate(180deg);
      color:#000001;
      transition:.5s;

      @media (min-width: 1024px) {
         :hover{
            transform: rotate(180deg) scale(1.3);
            color:#ee0000;
         }
      }
   `}
`
/****** ******************** *****/

const ArrowComponent = () => {

   const color = useContext(BlackContext);

   const top = () => {
      window.scrollTo({
         top:0,
         behavior:'smooth'
      });
   }

   const bottom = () => {
      window.scrollTo({
         top:window.innerHeight / 2,
         behavior:'smooth'
      });
   }

   return(
      <Arrow black={color.arrow} onClick={color.arrow ? top : bottom}>
         <FaArrowCircleDown/>
      </Arrow>
   )
}

export default ArrowComponent;