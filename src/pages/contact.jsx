import React, { useState } from 'react';
import styled from 'styled-components';
import { LayoutComponent } from '../components';
import InfoContext from '../context/InfoContext';

/***** Component style *****/
const Container = styled.div`
   display:flex;
   width:84vw;
   flex-direction:column;
   height:100vh;
   align-items:center;
   justify-content:center;
   user-select:all;
`
/****** ******************** *****/

const Contact = () => {

   const [formState, setFormState] = useState({
      name:"",
      email:""
   });

   const info = {
      name:'Contact',
      title:'Get In Touch',
      image:'contact.jpg'
   }

   const encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }

   const handleChange = (e) => {
      setFormState({
         ...formState,
         [e.target.name]:e.target.value
      })
   }
   
   const handleSubmit = (e) => {
      fetch("/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({ "form-name": "contact", ...formState })
       })
         .then(() => alert("Success!"))
         .catch(error => alert(error));
 
       e.preventDefault();
   }

   return(
      <InfoContext.Provider value={info}>
         <LayoutComponent front={true}>
            <Container>
               <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <label htmlFor="name">Name</label>
                  <input 
                     id="name" 
                     name="name"
                     type="text"
                     onChange={handleChange}
                     value={formState.name}
                     placeholder="Enter your name" 
                  />
                  <label htmlFor="email">Email</label>
                  <input 
                     id="email" 
                     name="email"
                     type="email"
                     onChange={handleChange}
                     value={formState.email}
                     placeholder="Enter your email" 
                  />
                  <button type="submit">Submit</button>
               </form>
            </Container>
         </LayoutComponent>
      </InfoContext.Provider>
   )
}

export default Contact