import React, { useCallback, useEffect, useRef } from 'react';   
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ImageComponent } from './';

/***** Component style *****/
const Container = styled.div`
   width:100%;
   display:flex;
   flex-direction:column;
   align-items:center;
   padding-top:10rem;
`
const H2 = styled.h2`
   color: #000001;
   font-size:2.5rem;
   width:80%;
`
const SlideContainer = styled.div`
   margin-top: 4rem;
   width:80%;
   position:relative;
   overflow:hidden;
`
const SlideBox = styled.div`
   display:flex;
   flex-wrap:nowrap;
   width:100%;
   height:40vh;
   @media (min-width: 1024px) {
      height:50vh;
   }
`
const Slide = styled.div`
   position:relative;
   min-width:100%;
   height:100%;
   display:grid;
   grid-template-columns: 100%;
   @media (min-width: 1024px) {
      grid-template-columns: 60% 40%;
   }
`
const Arrow = styled.div`
   width:2rem;
   display:flex;
   justify-content:space-between;
   align-items:center;
   cursor: pointer;
   font-size:2rem;
   z-index:100000;
   font-weight:lighter;
   height:100%;
   position:absolute;
   top:0;
   color:#eeeeee;
   ${({ right }) => right && `
      right:0;
   `}
   ${({ left }) => left && `
      left:0;
   `}

   @media (min-width: 1024px) {
      color:initial;
      &:hover{
         background-color:#000001aa;
         color:#ee0000;
      }  
   }
`
const Box = styled.div`
   position:absolute;
   width:100%;
   height:100%;
   text-align:left;
   padding:0 2rem;
   display:flex;
   flex-direction:column;
   justify-content:center;
   background-color:#000000dc;
   color:#ffffff;
   right:0;
   padding:0 15%;
   @media (min-width: 1024px) {
      width:50%;
      padding:0 2rem;
      text-align:right;
      background-color:transparent;
      color:initial;
   }
`
const H3 = styled.h3`
   font-size:1.5rem;
`
const Description = styled.div`
   width:100%;
   min-height:30%;
   color:#eeeeee;
   display:flex;
   align-items:center;
   margin: 1rem 0;
   @media (min-width: 1024px) {
      padding: 1rem;;
      background-color:#000001aa;
   }
`
const Technologies = styled.div`
   & > *{
      margin-right:.5rem;
   }
`
const Links = styled.div`
   margin-top:2rem;
   font-size:1.8rem;
   & > *{
      margin-left:.5rem;
      transition: .3s;
      @media (min-width: 1024px) {
         :hover{
            color:#ee0000;
            transition: .3s;
         }
      }
   }
`
/****** ******************** *****/

const NoteworthyProjectsComponent  = (props) => {

   const slideContainer = useRef(null);
   const slideBox = useRef(null);
   const intervalSlide = useRef(null);

   const right = () => {
      const firstSlide = slideBox.current.children[0];

      slideBox.current.style.transition = '1s ease all'
      slideBox.current.style.transform = 'translateX(-100%)'

      setTimeout( () => {
         if(slideBox.current !== null){
            slideBox.current.style.transition = 'none'
            slideBox.current.style.transform = 'translateX(0)'
            slideBox.current.appendChild(firstSlide)
         }
      }, 1000)
   }

   const left = () => {
      const lastSlide = slideBox.current.children[slideBox.current.children.length - 1];

      slideBox.current.insertBefore(lastSlide, slideBox.current.firstChild)
      slideBox.current.style.transition = 'none'
      slideBox.current.style.transform = 'translateX(-100%)'
      
      setTimeout( () => {
         if(slideBox.current !== null){
            slideBox.current.style.transition = '1s ease all'
            slideBox.current.style.transform = 'translateX(0)'
         }
      }, 10)
   }

   const setIntervalSlide = useCallback(() =>{
      intervalSlide.current = setInterval(() => {
         right();
      },5000);
   },[]);

   const clearIntervalSlide = () => {
      clearInterval(intervalSlide.current);
   }

   useEffect(() => {
      let effectSlideContainer = slideContainer.current; 
      
      setIntervalSlide()
      effectSlideContainer.addEventListener('mouseenter', clearIntervalSlide);
      effectSlideContainer.addEventListener('mouseleave', setIntervalSlide);
      return () => {
         clearIntervalSlide();
         effectSlideContainer.removeEventListener('mouseenter', clearIntervalSlide);
         effectSlideContainer.removeEventListener('mouseleave', setIntervalSlide);
      }
   }, [setIntervalSlide])

   return(
      <Container>
         <H2>1 - Neteworthy Projects</H2>
         <SlideContainer ref={slideContainer}>
            <SlideBox ref={slideBox}>
               {props.data.map((info, i) => (
                  <Slide key={i}>
                     <ImageComponent 
                        image={info.node.frontmatter.img}
                        alt={info.node.frontmatter.title}
                        title={info.node.frontmatter.title}
                     />
                     <Box >
                        <H3>{info.node.frontmatter.title}</H3>
                        <Description>{info.node.frontmatter.description}</Description>
                        <Technologies>
                           {info.node.frontmatter.tech.map((info, i) => (
                              <span key={i}>{info}</span>
                           ))}
                        </Technologies>
                        <Links>
                           {(info.node.frontmatter.external) ? (
                              <a href={info.node.frontmatter.external} target="_blank" rel="noreferrer">
                                 <FaExternalLinkAlt/>
                              </a> 
                           ) : ""}
                           {(info.node.frontmatter.github) ? (
                              <a href={info.node.frontmatter.github} target="_blank" rel="noreferrer">
                                 <FaGithub/>
                              </a>
                           ) : ""}
                        </Links>     
                     </Box>
                  </Slide>
               ))}
            </SlideBox>
            <Arrow onClick={left} left>
               <FaChevronLeft/>
            </Arrow>
            <Arrow onClick={right} right>
               <FaChevronRight/>
            </Arrow>
         </SlideContainer>         
      </Container>
   )
}

export default NoteworthyProjectsComponent 