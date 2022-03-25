import React, { useState } from 'react';   
import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";

/***** Component style *****/
const Container = styled.div`
   height:60%;
   width:80%;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   @media (min-width: 1025px) {
      width:40%;
      height:70%;
   }
`
const H2 = styled.h2`
   color: #000001;
   font-size:2.5rem;
   width:100%;
   margin-bottom:1rem;
   text-align:center;
`
const Form= styled.form`
   display:flex;
   flex-direction:column;
   width:90%;
   align-items:center;
`
const ContainerInput = styled.div`
   display: flex;
   flex-direction: column;
   width:100%;
   margin: .5rem 0;
`
const Label = styled.label`
   color: #000001;
   font-size: 1.2rem;
   max-width:max-content;
`
const Input = styled.input`
   color: #000001;
   border: .1rem solid #000001;
   border-radius: .5rem;
   padding: .5rem;
   font-size: 1rem;
   margin: .1rem 0 .1rem 0;
   width:100%;
   &:focus{
      outline: none;
      border: .2rem solid #00ee00;
   }
`
const TextArea = styled.textarea`
   color: #000001;
   border: .1rem solid #000001;
   border-radius: .5rem;
   padding: .5rem;
   font-size: 1rem;
   resize:none;
   margin: .1rem 0 .1rem 0;
   width: 100%;
   &:focus{
      outline: none;
      border: .2rem solid #00ee00;
   }
   &::-webkit-scrollbar {
      width: .5rem;
      height: .5rem;
      background-color: #eeeeee;
   }
   &::-webkit-scrollbar-thumb {
      background: #ee0000;
      border-radius: 1rem;
   }
`
const Button = styled.button`
   width:40%;
   min-width:max-content;
   border: .1rem solid #ee0000;
   background-color:#000001bb;
   border-radius: .5rem;
   color: #eeeeee;
   padding: .8rem;
   margin-top: 1rem;
   @media (min-width: 768px) {
      cursor:pointer;
      :hover{
         background-color:#000001cc;
         color:#eeeeee;
      }
   }
`
const H3 = styled.h2`
   text-align:center;
   color: #000001;
   font-size:4rem;
   width:100%;
   margin-bottom:1rem;
`
/****** ******************** *****/

const ContactFormComponent = () => {

   const [formState, setFormState] = useState({
      name:'',
      email:'',
      message:'',
   });

   const [buttonState, setButtonState] = useState(false);
   const [sendState, setSendState] = useState(false);

   const encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
    }

   const handleChange = (e) => {
      setFormState({
         ...formState,
         [e.target.name]:e.target.value
      })
   }
   
   const handleSubmit = (e) => {
      /* fetch('/', {
         method: 'POST',
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
         body: encode({ 'form-name': 'contact', ...formState })
      })
      .then(() => {
         setFormState({
            ...formState,
            name:'',
            email:'',
            message:'',
         });
         setSendState(true);
         setButtonState(false);
      }).catch(error => alert(error)); */
      setFormState({
         ...formState,
         name:'',
         email:'',
         message:'',
      });
      setSendState(true);
      setButtonState(false);
 
      e.preventDefault();
   }

   const handleMessage = (e) => {
      setSendState(false);

      e.preventDefault();
   }

   const onChangeReCaptcha = () => {
      setButtonState(true)
   }

   const onExpiredReCaptcha = () => {
      setButtonState(false)
   }

   return(
      <Container>
         {(!sendState) ? (
            <Form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <H2>Let’s talk about your project</H2>
               <input type="hidden" name="form-name" value="contact" />
               <ContainerInput>
                  <Label htmlFor="name">Name</Label>
                  <Input
                     id="name" 
                     name="name"
                     type="text"
                     onChange={handleChange}
                     value={formState.name}
                     placeholder="Enter your name" 
                     /* required */
                  />
                  </ContainerInput>
                  <ContainerInput>
                  <Label htmlFor="email">Email</Label>
                  <Input
                     id="email" 
                     name="email"
                     type="email"
                     onChange={handleChange}
                     value={formState.email}
                     placeholder="Enter your email" 
                     /* required */
                  />
                  </ContainerInput>
                  <ContainerInput>
                  <Label htmlFor="message">Message</Label>
                  <TextArea 
                     id="message"
                     name="message"
                     onChange={handleChange}
                     value={formState.message}
                     placeholder="Enter your message"
                     rows="5"
                     /* required */
                  ></TextArea>
                  </ContainerInput>
                  <ReCAPTCHA
                     sitekey="6LcLsA8fAAAAAMX0mHHo1S_xg6EbA-rZVY3hdmhP"
                     size="compact"
                     onChange={onChangeReCaptcha}
                     onExpired={onExpiredReCaptcha}
                  />
                  {(buttonState) ? (
                     <Button type="submit">SUBMIT</Button>
                  ) : null}
               </Form>
         ) : (
            <>
               <Form onSubmit={handleMessage}>
                  <H3>Thanks for contacting</H3>
                  <Button type="submit">NEW MESSAGE</Button>
               </Form>
            </>
         )}
      </Container>
   )
}

export default ContactFormComponent