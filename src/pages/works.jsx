import React, { useState, useEffect } from 'react';   
import styled from 'styled-components';
import { LayoutComponent, WorksComponent } from '../components';
import InfoContext from '../context/InfoContext';

/***** Component style *****/
const H2 = styled.h2`
   color: #000001;
   font-size:2.5rem;
   margin: 3rem;
`
/****** ******************** *****/

const Works = () => {

   const[workList, setWorkList] = useState(null);

   const info = {
      name:'Works',
      title:"Some Works I'Ve Done",
      image:'works.jpg'
   }

   useEffect(() => {
      // get data from GitHub api
      fetch(`https://api.github.com/users/kemoyano23/repos`)
         .then(response => response.json())
         .then(data => {
            setWorkList(data)
         })
   }, [])

   return(
      <InfoContext.Provider value={info}>
         {console.log(workList)}
         <LayoutComponent front={true}>
            <H2>Noteworthy Projects</H2>
            <WorksComponent/>
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default Works