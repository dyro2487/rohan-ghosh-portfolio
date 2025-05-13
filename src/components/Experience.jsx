import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBriefcase, FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

const ExperienceContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
`;

const ExperienceItem = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #0078d7;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const Company = styled.h3`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Role = styled.h4`
  font-size: 1.3rem;
  color: #0078d7;
  margin-bottom: 0.5rem;
`;

const Period = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #555;
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
  color: #555;
  line-height: 1.6;
`;

const Responsibilities = styled.ul`
  margin-top: 1.5rem;
`;

const Responsibility = styled.li`
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 2rem;
  line-height: 1.6;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #0078d7;
    font-size: 1.2rem;
  }
`;

const Technologies = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #e9f5ff;
  color: #0078d7;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "ILink Digital (YUM Brands)",
      role: "Technical Specialist",
      period: "Apr 2024 - Present",
      description: "Yum! Brands is one of the world's largest fast food restaurant companies (KFC, Pizza Hut, Taco Bell, The Habit Burger Grill).",
      responsibilities: [
        "Responsible for writing scalable code",
        "Gathering requirements from stakeholders",
        "Writing comprehensive test cases",
        "Deploying code to production environments",
        "Collaborating with cross-functional teams"
      ],
      technologies: ["Node.js", "React", "AWS", "Docker", "CI/CD"]
    },
    {
      id: 2,
      company: "Abylle Solutions (HID Global)",
      role: "Node JS Developer",
      period: "Jan 2024 - Mar 2024",
      description: "Implemented mobile access control system replacing physical cards with digital credentials in Apple Wallet.",
      responsibilities: [
        "Worked closely with clients to gather requirements",
        "Explored PACS documentation and API specifications",
        "Integrated Physical Access Control System (PACS) with HID client",
        "Wrote unit test cases for critical functionality",
        "Implemented mobile access via Apple Wallet integration"
      ],
      technologies: ["Node.js", "Apple Wallet API", "REST APIs", "Jest"]
    },
    {
      id: 3,
      company: "Goodworklabs (Licious & AWAK)",
      role: "Software Engineer",
      period: "Oct 2020 - Jul 2023",
      description: "Developed backend services for e-commerce (Licious) and medical technology (AWAK) platforms.",
      responsibilities: [
        "Designed and developed User, Device, Auth, and Therapy Summary APIs",
        "Created CLINICIAN, CLINIC, DIET, VITALS microservices",
        "Optimized API performance (24% speed improvement)",
        "Implemented data processing and AWS cloud uploads",
        "Wrote comprehensive unit test cases"
      ],
      technologies: ["Node.js", "Microservices", "AWS", "MongoDB", "Kafka"]
    },
    {
      id: 4,
      company: "EXzaTech (Karnataka Bank)",
      role: "Associate Software Engineer",
      period: "Aug 2019 - Sep 2020",
      description: "Developed digital banking solutions including TAB Banking account opening system.",
      responsibilities: [
        "Designed and developed new web applications",
        "Implemented database setup and deployment",
        "Worked on digitized account opening process",
        "Collaborated with banking stakeholders"
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "REST APIs"]
    },
    {
      id: 5,
      company: "Exceleron India Pvt Ltd",
      role: "Associate Product Developer",
      period: "Mar 2017 - Jul 2018",
      description: "Worked on Prepaid Account Management System (PAMS) for North American utilities.",
      responsibilities: [
        "Developed server-side and client-side business logic",
        "Used REST and SOAP services for integrations",
        "Performed functional and user acceptance testing",
        "Followed Agile development methodologies",
        "Fixed bugs related to notifications and alerts"
      ],
      technologies: ["Java", "SOAP", "REST", "Oracle DB"]
    }
  ];

  const getIcon = (techStack) => {
    if (techStack.includes("Node.js") || techStack.includes("React")) return <FaCode />;
    if (techStack.includes("AWS") || techStack.includes("Docker")) return <FaServer />;
    if (techStack.includes("Mobile") || techStack.includes("Apple")) return <FaMobile />;
    if (techStack.includes("MongoDB") || techStack.includes("MySQL")) return <FaDatabase />;
    return <FaBriefcase />;
  };

  return (
    <ExperienceContainer id="experience">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>
      
      <div className="container">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Company>
              {getIcon(exp.technologies)}
              {exp.company}
            </Company>
            <Role>{exp.role}</Role>
            <Period>{exp.period}</Period>
            <Description>{exp.description}</Description>
            
            <Responsibilities>
              {exp.responsibilities.map((resp, i) => (
                <Responsibility key={i}>{resp}</Responsibility>
              ))}
            </Responsibilities>
            
            <Technologies>
              {exp.technologies.map((tech, i) => (
                <TechTag key={i}>
                  {tech.includes("Node.js") && <FaCode />}
                  {tech.includes("AWS") && <FaServer />}
                  {tech.includes("Apple") && <FaMobile />}
                  {tech.includes("MongoDB") && <FaDatabase />}
                  {tech}
                </TechTag>
              ))}
            </Technologies>
          </ExperienceItem>
        ))}
      </div>
    </ExperienceContainer>
  );
};

export default Experience;