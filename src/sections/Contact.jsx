import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

// --- No changes to styled-components ---
const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  h2 { font-family: 'Playfair Display', serif; font-size: 3rem; margin-bottom: 1rem; text-transform: none; }
  p { color: rgba(255, 255, 255, 0.7); margin-bottom: 3rem; font-size: 1.1rem; line-height: 1.7; }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const FormField = styled.div`
  position: relative;
`;
const Input = styled.input`
  width: 100%; box-sizing: border-box; padding: 1rem; background-color: transparent; border: 1px solid #444;
  border-radius: 4px; color: var(--primary-white); font-size: 1rem; transition: border-color 0.3s ease;
  &:focus { outline: none; border-color: var(--accent-blue); }
`;
const TextArea = styled.textarea`
  width: 100%; box-sizing: border-box; padding: 1rem; background-color: transparent; border: 1px solid #444;
  border-radius: 4px; color: var(--primary-white); font-size: 1rem; resize: vertical; min-height: 150px;
  font-family: 'Roboto', sans-serif; transition: border-color 0.3s ease;
  &:focus { outline: none; border-color: var(--accent-blue); }
`;
const SubmitButton = styled.button`
  align-self: center; padding: 1rem 3rem; background-color: transparent; color: var(--primary-white);
  border: 2px solid var(--primary-white); border-radius: 4px; font-family: 'Roboto Condensed', sans-serif;
  font-size: 1rem; text-transform: uppercase; font-weight: 700; cursor: pointer; position: relative;
  overflow: hidden; transition: color 0.4s ease-in-out; z-index: 1;
  &::before { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0;
    background-color: var(--primary-white); border-radius: 50%; transform: translate(-50%, -50%);
    transition: width 0.4s ease-in-out, height 0.4s ease-in-out; z-index: -1; }
  &:hover { color: var(--primary-black); }
  &:hover::before { width: 225%; height: 500%; }
  &:disabled { background-color: #555; border-color: #555; color: #999; cursor: not-allowed; }
  &:disabled:hover::before { width: 0; height: 0; }
`;
const StatusMessage = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  color: ${props => (props.success ? 'lightgreen' : 'lightcoral')};
`;

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
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

  return (
    // --- CHANGE MADE HERE ---
    <ContactContainer id='pitstop'>
      {/* --- CHANGE MADE HERE --- */}
      <h2>The Pitstop 🏎️</h2>
      <p>
        Have a project, a question, or just want to talk shop? 
        <br />
        Pull in for a quick refuel and connection.
      </p>
      <Form ref={form} onSubmit={sendEmail}>
        <FormField>
          <Input type="text" name="user_name" required placeholder="Your Name" />
        </FormField>
        <FormField>
          <Input type="email" name="user_email" required placeholder="Your Email" />
        </FormField>
        <FormField>
          <TextArea name="message" required placeholder="Your Message"></TextArea>
        </FormField>
        <SubmitButton type="submit" disabled={status === 'Sending...'}>
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </Form>
      {status && <StatusMessage success={status.includes('successfully')}>{status}</StatusMessage>}
    </ContactContainer>
  );
};

export default Contact;
