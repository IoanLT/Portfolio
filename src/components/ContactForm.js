import React from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import styled from 'styled-components';


export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_pyx4chjQUt4qhMlEz8Wq6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <Form 
        // className="contact-form" 
        onSubmit={sendEmail}
    > 
      {/* <h4>Drop me a line.</h4>    */}
      <input type="text" name="name" placeholder="Name" />     
      <input type="email" name="email" placeholder="Email" />     
      <textarea name="message" placeholder="Message" />
      <button type="submit" value="Send Message">Send message</button>
    </Form>
  );
}

const Form = styled(motion.form)` 
    width: 400px;
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    /* align-items: center;  */   
    margin-right: auto;
    
    h4 {
      margin-bottom: 30px;     
      font-size: 1.5rem;
    }

    input {      
      width: 100%;
      height: 42px;
      margin-bottom: 30px;
      border-radius: 5px;
      /* border: 1px solid hsl(360, 64%, 55%); */
      padding: 0 10px;
      box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1);
      font-size: 1rem;
      font-weight: 600;
   } 

   textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 30px;
    border-radius: 5px;
    /* border: 1px solid hsl(360, 64%, 55%); */
    padding: 10px;
    font-size: 1rem;
    font-weight: 600;

    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
      scrollbar-width: none;
    }

  button {
    width: 250px;
    font-size: 1rem;
    font-weight: 400;
    /* border-radius: 10px; */
  }
`

