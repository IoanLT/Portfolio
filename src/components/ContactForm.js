import React from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function ContactForm({ setShowModal }) {

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 1000)
  // }, [setShowModal]);


  const handleModal = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000)    
  };

  return (
    <Form onSubmit={sendEmail}>       
      <input type="text" name="name" placeholder="Name" />     
      <input type="email" name="email" placeholder="Email" />     
      <textarea name="message" placeholder="Message" />
      <button 
        type="submit" 
        onClick={handleModal}
      >
        Send message
      </button>
    </Form>
  );
}

const Form = styled(motion.form)` 
    width: 500px;
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;      
    margin-right: 50px;

    @media (max-width: 1130px) {        
      width: 100%;
      margin-right: 0;
    }
    
    h4 {
      margin-bottom: 30px;     
      font-size: 1.5rem;
    }

    input {      
      width: 100%;
      height: 42px;
      margin-bottom: 30px;
      border-radius: 5px;      
      padding: 0 10px;      
      font-size: 1rem;     
   } 

   textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 30px;
    border-radius: 5px;    
    padding: 10px;
    font-size: 1rem;
    
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
    margin: 0;

    @media (max-width: 500px) {        
      width: 100%;
      margin-right: 0;
    }
  }
`

