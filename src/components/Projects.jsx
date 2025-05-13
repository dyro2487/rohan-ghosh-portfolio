import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaLaptopCode, FaMobileAlt, FaServer, FaCloud, FaDatabase } from 'react-icons/fa';

const ProjectsContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  padding: 1.8rem;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  border-top: 4px solid #0078d7;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ProjectIcon = styled.div`
  font-size: 1.8rem;
  color: #0078d7;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin: 0;
`;

const ProjectCompany = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  display: block;
`;

const ProjectDescription = styled.p`
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const ProjectHighlights = styled.ul`
  margin: 1.5rem 0;
`;

const ProjectHighlight = styled.li`
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.8rem;
  line-height: 1.5;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #0078d7;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
`;

const TechItem = styled.span`
  background-color: #e9f5ff;
  color: #0078d7;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "YUM Brands Platforms",
      company: "ILink Digital",
      type: "web",
      description: "Development of scalable solutions for KFC, Pizza Hut, and Taco Bell digital platforms.",
      highlights: [
        "Implemented scalable architecture for high-traffic applications",
        "Optimized API performance for better user experience",
        "Developed automated deployment pipelines",
        "Created comprehensive test suites"
      ],
      technologies: ["Node.js", "React", "AWS", "Docker", "CI/CD"]
    },
    {
      id: 2,
      name: "NEO Mobile Access",
      company: "HID Global",
      type: "mobile",
      description: "Mobile-based access control system replacing physical cards with Apple Wallet integration.",
      highlights: [
        "Integrated Physical Access Control System (PACS)",
        "Implemented Apple Wallet digital credentials",
        "Developed secure authentication flows",
        "Optimized for enterprise-scale deployment"
      ],
      technologies: ["Node.js", "Apple Wallet API", "PACS", "Jest"]
    },
    {
      id: 3,
      name: "CTAP Data Processing",
      company: "Goodworklabs (AWAK)",
      type: "backend",
      description: "Dialysis patient data processing and cloud upload system for medical analysis.",
      highlights: [
        "Designed data processing pipelines",
        "Implemented AWS cloud integration",
        "Developed therapy summary APIs",
        "Created data decoding algorithms"
      ],
      technologies: ["Node.js", "AWS", "Data Processing", "EDC"]
    },
    {
      id: 4,
      name: "AWAK Patient Management",
      company: "Goodworklabs",
      type: "backend",
      description: "Comprehensive dialysis patient management system with clinician interfaces.",
      highlights: [
        "Built CLINICIAN, CLINIC, DIET microservices",
        "Developed patient vitals tracking system",
        "Implemented secure authentication",
        "Created reporting dashboards"
      ],
      technologies: ["Node.js", "Microservices", "MongoDB", "Redis"]
    },
    {
      id: 5,
      name: "Licious E-commerce",
      company: "Goodworklabs",
      type: "web",
      description: "E-commerce platform for meat and seafood products serving 2M+ customers.",
      highlights: [
        "Optimized API performance (24% speed improvement)",
        "Enhanced landing page functionality",
        "Improved order management system",
        "Implemented scalable architecture"
      ],
      technologies: ["Node.js", "React", "Performance", "Scalability"]
    },
    {
      id: 6,
      name: "KBL Xpress Banking",
      company: "EXzaTech (Karnataka Bank)",
      type: "web",
      description: "Digital banking solution for on-the-spot savings account opening via TAB Banking.",
      highlights: [
        "Developed account opening workflows",
        "Implemented digital KYC processes",
        "Built responsive web interfaces",
        "Integrated with core banking systems"
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "Banking APIs"]
    },
    {
      id: 7,
      name: "PAMS Utility System",
      company: "Exceleron India",
      type: "backend",
      description: "Prepaid account management system for North American utility companies.",
      highlights: [
        "Developed notification and alert systems",
        "Optimized existing codebase",
        "Implemented REST and SOAP services",
        "Conducted user acceptance testing"
      ],
      technologies: ["Java", "SOAP", "REST", "Oracle"]
    }
  ];

  const getProjectIcon = (type) => {
    switch(type) {
      case 'mobile': return <FaMobileAlt />;
      case 'backend': return <FaServer />;
      case 'web': return <FaLaptopCode />;
      case 'cloud': return <FaCloud />;
      case 'database': return <FaDatabase />;
      default: return <FaLaptopCode />;
    }
  };

  return (
    <ProjectsContainer id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectHeader>
              <ProjectIcon>
                {getProjectIcon(project.type)}
              </ProjectIcon>
              <div>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectCompany>{project.company}</ProjectCompany>
              </div>
            </ProjectHeader>
            
            <ProjectDescription>{project.description}</ProjectDescription>
            
            <ProjectHighlights>
              {project.highlights.map((highlight, i) => (
                <ProjectHighlight key={i}>{highlight}</ProjectHighlight>
              ))}
            </ProjectHighlights>
            
            <TechStack>
              {project.technologies.map((tech, i) => (
                <TechItem key={i}>
                  {tech === 'Node.js' && <FaServer size={12} />}
                  {tech === 'React' && <FaLaptopCode size={12} />}
                  {tech === 'AWS' && <FaCloud size={12} />}
                  {tech}
                </TechItem>
              ))}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;