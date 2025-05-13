import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaFilePdf, FaDownload, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const CVContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const CVContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CVDownloadCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 2px dashed #e9ecef;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: #0078d7;
  }
`;

const CVIcon = styled.div`
  font-size: 3rem;
  color: #0078d7;
  margin-bottom: 1.5rem;
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #0078d7;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #005fa3;
    transform: translateY(-2px);
  }
`;

const CVSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SummaryItem = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
`;

const SummaryIcon = styled.div`
  font-size: 1.5rem;
  color: #0078d7;
  margin-top: 0.3rem;
`;

const SummaryContent = styled.div`
  flex: 1;
`;

const SummaryTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const SummaryText = styled.p`
  color: #555;
  line-height: 1.6;
`;

const CVSection = () => {
  // Replace with your actual CV file path
  const cvFile = "/assets/Rohan_Ghosh_CV.pdf";
  
  const summaryData = [
    {
      icon: <FaBriefcase />,
      title: "7+ Years Experience",
      content: "Full stack development with expertise in Node.js, React, and cloud technologies."
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      content: "B.Tech in Computer Science from CMRIT (VTU) and PG Diploma in Advanced Computing from CDAC."
    },
    {
      icon: <FaCode />,
      title: "Technical Skills",
      content: "Node.js, React, AWS, Docker, MongoDB, PostgreSQL, Kafka, Redis, and more."
    }
  ];

  return (
    <CVContainer id="cv">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h2>

      <CVContent>
        <CVDownloadCard
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <CVIcon>
            <FaFilePdf />
          </CVIcon>
          <h3>Download My CV</h3>
          <p>Get a comprehensive overview of my skills and experience</p>
          <CVButton href={cvFile} download="Rohan_Ghosh_Resume.pdf">
            <FaDownload /> Download PDF
          </CVButton>
        </CVDownloadCard>

        <CVSummary>
          {summaryData.map((item, index) => (
            <SummaryItem
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SummaryIcon>{item.icon}</SummaryIcon>
              <SummaryContent>
                <SummaryTitle>{item.title}</SummaryTitle>
                <SummaryText>{item.content}</SummaryText>
              </SummaryContent>
            </SummaryItem>
          ))}
        </CVSummary>
      </CVContent>
    </CVContainer>
  );
};

export default CVSection;