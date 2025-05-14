import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  FaFilePdf, 
  FaDownload, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaEye,
  FaTimes 
} from 'react-icons/fa';

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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
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
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
  text-align: center;

  &:hover {
    background-color: #005fa3;
    transform: translateY(-2px);
  }
`;

const PreviewButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f0f0f0;
  color: #333;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  flex: 1;
  justify-content: center;

  &:hover {
    background-color: #e0e0e0;
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

const PreviewModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PDFPreview = styled.iframe`
  width: 90%;
  height: 90%;
  border: none;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const CVSection = () => {
  const [showPreview, setShowPreview] = useState(false);
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
      content: "B.Tech in ECE from CMRIT (VTU) and PG Diploma in Advanced Computing from CDAC."
    },
    {
      icon: <FaCode />,
      title: "Technical Skills",
      content: "Node.js, React, AWS, Docker, MongoDB, PostgreSQL, Kafka, Redis, and more."
    }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = "Rohan_Ghosh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <h3>View My CV</h3>
          <p>Get a comprehensive overview of my skills and experience</p>
          
          <ButtonGroup>
            <PreviewButton onClick={() => setShowPreview(true)}>
              <FaEye /> Preview
            </PreviewButton>
            <CVButton onClick={handleDownload}>
              <FaDownload /> Download
            </CVButton>
          </ButtonGroup>
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

      {showPreview && (
        <PreviewModal>
          <PDFPreview 
            src={`${cvFile}#view=FitH`} 
            title="CV Preview"
            aria-label="CV Preview"
          />
          <CloseButton onClick={() => setShowPreview(false)}>
            <FaTimes /> Close Preview
          </CloseButton>
        </PreviewModal>
      )}
    </CVContainer>
  );
};

export default CVSection;