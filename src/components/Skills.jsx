import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { skills } from '../data';

const SkillsContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #0078d7;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #0078d7;
  }
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillItem = styled.li`
  background-color: #e9f5ff;
  color: #0078d7;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>
      
      <div className="container">
        <SkillsGrid>
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryTitle>{category}</CategoryTitle>
              <SkillList>
                {items.map((skill, i) => (
                  <SkillItem key={i}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </div>
    </SkillsContainer>
  );
};

export default Skills;