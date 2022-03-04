import React from 'react';   
import styled from 'styled-components';
import { FaCss3, FaHtml5, FaJsSquare, FaReact, FaAngular, FaNodeJs, FaDatabase } from 'react-icons/fa';
import fecha from '../utils/fecha';

/***** Component style *****/
const Container = styled.div`
   width:100%;
   min-height:max-content;
   display:flex;
   flex-direction:column;
   align-items:center;
   padding:15rem 0 8rem 0;
`
const H2 = styled.h2`
   color: #000001;
   font-size:2.5rem;
   width:100%;
   padding:5% 15%;
   @media (min-width: 1024px) {
      padding:0;
      width:80%;
   }
`
const Skills = styled.div`
   width:100%;
   display:flex;
   flex-direction:column;
   padding:5% 15%;
   @media (min-width: 1024px) {
      flex-direction:row;
      justify-content:space-between;
      padding:5% 0;
      width:80%;
   }
`
const Grid = styled.div`
   display:grid;
   width:100%;
   grid-column-gap: 4%;
   @media (min-width: 1024px) {
      grid-template-columns: 48% 48%
   }
`
const Skill = styled.div`
   width:100%;
   display:flex;
   margin-bottom:3rem;
`
const Logo = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   width:15%;
   font-size:3rem;
   color:${props => props.color};
`
const MiniContainer = styled.div`
   width:85%;
`
const Nombre = styled.div`
   width:100%;
   height:70%;
   display:flex;
   justify-content:space-between;
   align-items:center;
`
const Name = styled.span`
   margin-right:.5rem;
   font-size:1.3rem;
`
const Date = styled.span`
   font-size:.8rem;
   margin-right:.5rem;
`
const Barra = styled.div`
   position:relative;
   box-shadow: 10px 10px 20px #111111;
   width:100%;
   height:30%;
   border-radius:10px;
   ::after{
      content: '';
      position: absolute;
      left:0;
      height: 100%;
      width: ${props => props.width};
      background-color:${props => props.color};
      border-radius:10px;
   }
`
/****** ******************** *****/

const SkillsComponent = (props) => {

   const skills = [
      {  
         name:'HTML5',
         logo:<FaHtml5/>,
         date: fecha('9/1/2020'),
         percent:'95%',
         color:'#e35d22'
      },
      {  
         name:'CSS3',
         logo:<FaCss3/>,
         date: fecha('9/1/2020'),
         percent:'90%',
         color:'#2071f2'
      },
      {  
         name:'JAVASCRIPT',
         logo:<FaJsSquare/>,
         date: fecha('10/1/2020'),
         percent:'80%',
         color:'#ead41c'
      },
      {  
         name:'REACTJS',
         logo:<FaReact/>,
         date: fecha('6/1/2021'),
         percent:'40%',
         color:'#61dafb'
      },
      {  
         name:'ANGULAR',
         logo:<FaAngular/>,
         date: fecha('11/1/2021'),
         percent:'50%',
         color:'#dd0031'
      },
      {  
         name:'NODEJS',
         logo:<FaNodeJs/>,
         date: fecha('11/1/2021'),
         percent:'45%',
         color:'#689f63'
      },
      {  
         name:'MYSQL',
         logo:<FaDatabase/>,
         date: fecha('12/1/2021'),
         percent:'60%',
         color:'#005c84'
      },
   ]

   return(
      <Container>
         <H2>2 - SKILL SET</H2>
         <Skills>
            <Grid>
               {skills.map((info, i) => (
                  <Skill key={i}>
                     <Logo color={info.color}>
                        {info.logo}
                     </Logo>
                     <MiniContainer>
                        <Nombre>
                           <div>
                              <Name>{info.name}</Name>
                              {info.date.años >> 0 ? (
                                 <Date>{info.date.años} {info.date.años >> 1 ? 'YEARS' : 'YEAR'}</Date>
                              ): null}
                              {info.date.meses >> 0 ? (
                                 <Date>{info.date.meses} {info.date.meses >> 1 ? 'MONTHS' : 'MONTH'}</Date>
                              ): null}
                           </div>
                           {info.percent}
                        </Nombre>
                        <Barra color={info.color} width={info.percent}/>
                     </MiniContainer>
                  </Skill>
               ))}
            </Grid>
         </Skills>
      </Container>
   )
}

export default SkillsComponent