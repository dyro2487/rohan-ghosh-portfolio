import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheck, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Styled Components
const ContactContainer = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(to right, #f8f9fa 50%, #ffffff 50%);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    background: #f8f9fa;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const ContactFormContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    order: 1;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #0078d7;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #555;

  svg {
    color: #0078d7;
    font-size: 1.2rem;
  }

  a {
    color: #555;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #0078d7;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #0078d7;
    box-shadow: 0 0 0 3px rgba(0, 120, 215, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #0078d7;
    box-shadow: 0 0 0 3px rgba(0, 120, 215, 0.1);
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #0078d7;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #005fa3;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const Message = styled(motion.div)`
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  text-align: center;
  background-color: ${props => props.$isError ? '#f8d7da' : '#d4edda'};
  color: ${props => props.$isError ? '#721c24' : '#155724'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_neyqgcv',
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_w9ny6ov',
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'PHdQYPtb-atrQQHfU'
    )
    .then((result) => {
      setMessage({ text: 'Message sent successfully!', isError: false });
      form.current.reset();
    }, (error) => {
      setMessage({ text: 'Failed to send message. Please try again.', isError: true });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', isError: false }), 5000);
    });
  };

  return (
    <ContactContainer id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </SectionTitle>

      <ContactGrid>
        <ContactInfo>
          <InfoItem>
            <FaPhone />
            <a href="tel:+919739657905">+91 97396 57905</a>
          </InfoItem>
          <InfoItem>
            <FaEnvelope />
            <a href="mailto:rogh.2487@gmail.com">rogh.2487@gmail.com</a>
          </InfoItem>
          <InfoItem>
            <FaMapMarkerAlt />
            <span>Bangalore, India</span>
          </InfoItem>
        </ContactInfo>

        <ContactFormContainer>
          <ContactForm ref={form} onSubmit={sendEmail}>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <Input type="text" id="name" name="from_name" required />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email</label>
              <Input type="email" id="email" name="reply_to" required />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Message</label>
              <TextArea id="message" name="message" required />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </SubmitButton>
            
            {message.text && (
              <Message
                $isError={message.isError}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {message.isError ? <FaTimes /> : <FaCheck />}
                {message.text}
              </Message>
            )}
          </ContactForm>
        </ContactFormContainer>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;