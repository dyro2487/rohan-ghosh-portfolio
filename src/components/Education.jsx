import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { education } from '../data';

const EducationContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const EducationList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const EducationItem = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Degree = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Institution = styled.h4`
  font-size: 1.1rem;
  color: #0078d7;
  margin-bottom: 0.5rem;
`;

const Period = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #555;
`;

const Field = styled.p`
  color: #555;
`;

const Education = () => {
  return (
    <EducationContainer id="education">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      
      <div className="container">
        <EducationList>
          {education.map((edu, index) => (
            <EducationItem
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Degree>{edu.degree}</Degree>
              <Institution>{edu.institution}</Institution>
              <Period>{edu.period}</Period>
              <Field>{edu.field}</Field>
            </EducationItem>
          ))}
        </EducationList>
      </div>
    </EducationContainer>
  );
};

export default Education;