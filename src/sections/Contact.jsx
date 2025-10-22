import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { GlitchText } from '../components/animations/GlitchText';

const ContactContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 2rem;
  
  h2 { 
    font-family: 'Playfair Display', serif; 
    font-size: 3rem; 
    margin-bottom: 1rem; 
    text-transform: none; 
  }
  
  p { 
    color: rgba(255, 255, 255, 0.9); 
    margin-bottom: 3rem; 
    font-size: 1.1rem; 
    line-height: 1.7; 
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormField = styled(motion.div)`
  position: relative;
`;

const Input = styled(motion.input)`
  width: 100%; 
  box-sizing: border-box; 
  padding: 1.2rem; 
  background-color: rgba(22, 88, 142, 0.2);
  border: 2px solid #81C4FF;
  border-radius: 8px; 
  color: #f5f5f5;
  font-size: 1rem; 
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif;
  
  &:focus { 
    outline: none; 
    border-color: #E7222E;
    background-color: rgba(22, 88, 142, 0.3);
    box-shadow: 0 0 25px rgba(129, 196, 255, 0.3), 0 0 40px rgba(231, 34, 46, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%; 
  box-sizing: border-box; 
  padding: 1.2rem; 
  background-color: rgba(22, 88, 142, 0.2);
  border: 2px solid #81C4FF;
  border-radius: 8px; 
  color: #f5f5f5;
  font-size: 1rem; 
  resize: vertical; 
  min-height: 180px;
  font-family: 'Roboto', sans-serif; 
  transition: all 0.3s ease;
  
  &:focus { 
    outline: none; 
    border-color: #E7222E;
    background-color: rgba(22, 88, 142, 0.3);
    box-shadow: 0 0 25px rgba(129, 196, 255, 0.3), 0 0 40px rgba(231, 34, 46, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SubmitButton = styled(motion.button)`
  align-self: center; 
  padding: 1.2rem 3.5rem; 
  background-color: transparent; 
  color: #81C4FF;
  border: 3px solid #81C4FF;
  border-radius: 8px; 
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.1rem; 
  text-transform: uppercase; 
  font-weight: 700; 
  cursor: pointer; 
  position: relative;
  overflow: hidden; 
  z-index: 1;
  letter-spacing: 1.5px;
  
  &::before { 
    content: ''; 
    position: absolute; 
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #81C4FF, #16588E, #E7222E);
    transition: left 0.5s ease;
    z-index: -1; 
  }
  
  &:hover::before { 
    left: 0;
  }
  
  &:hover {
    color: #0d0d0d;
    border-color: #E7222E;
    box-shadow: 0 5px 30px rgba(129, 196, 255, 0.6), 0 0 50px rgba(231, 34, 46, 0.4);
    transform: translateY(-3px);
  }
  
  &:disabled { 
    background-color: #333;
    border-color: #555; 
    color: #999; 
    cursor: not-allowed; 
  }
  
  &:disabled:hover::before { 
    left: -100%;
  }
  
  &:disabled:hover {
    transform: none;
    box-shadow: none;
  }
`;

const StatusMessage = styled(motion.p)`
  margin-top: 1.5rem;
  font-weight: bold;
  color: ${props => (props.$success ? '#81C4FF' : '#E7222E')};
  font-size: 1.1rem;
`;

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <ContactContainer 
      id='pitstop'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GlitchText text="The Pitstop" />
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Have a project, a question, or just want to talk shop? Pull in for a quick refuel and connection.
      </motion.p>

      <Form 
        ref={form} 
        onSubmit={sendEmail}
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FormField variants={fieldVariants}>
          <Input 
            type="text" 
            name="user_name" 
            required 
            placeholder="Your Name"
          />
        </FormField>
        
        <FormField variants={fieldVariants}>
          <Input 
            type="email" 
            name="user_email" 
            required 
            placeholder="Your Email"
          />
        </FormField>
        
        <FormField variants={fieldVariants}>
          <TextArea 
            name="message" 
            required 
            placeholder="Your Message"
          />
        </FormField>
        
        <SubmitButton 
          type="submit" 
          disabled={status === 'Sending...'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </Form>

      {status && (
        <StatusMessage 
          $success={status.includes('successfully')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {status}
        </StatusMessage>
      )}
    </ContactContainer>
  );
};

export default Contact;
