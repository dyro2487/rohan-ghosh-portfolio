import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 4rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  padding: 2rem;
  z-index: 2;

  @media (max-width: 992px) {
    order: 2;
    padding: 1rem;
  }
`;

const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (max-width: 992px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #0078d7;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Description = styled(motion.p)`
  max-width: 600px;
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;

  @media (max-width: 992px) {
    margin: 0 auto 2.5rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;

  a {
    color: #333;
    transition: color 0.3s;

    &:hover {
      color: #0078d7;
    }
  }

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  a {
    color: #333;
    font-size: 1.5rem;
    transition: all 0.3s;

    &:hover {
      color: #0078d7;
      transform: translateY(-3px);
    }
  }

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const ProfilePhoto = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid #0078d7;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    border-width: 6px;
  }
`;

const HeroWithProfile = () => {
  const personalData = {
    name: "Rohan Ghosh",
    position: "Full Stack Developer",
    about: "Experienced Full Stack Developer with 7+ years of expertise in Node.js, React, and AWS. Passionate about building scalable applications and solving complex problems.",
    phone: "9739657905",
    email: "rogh.2487@gmail.com",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/dyro2487", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/rohan-ghosh-5763ab302", icon: "linkedin" },
      { name: "Twitter", url: "https://x.com/rohan26121992", icon: "twitter" }
    ]
  };

  const iconComponents = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter
  };

  return (
    <HeroContainer id="home">
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {personalData.name}
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {personalData.position}
        </Subtitle>
        
        <Description
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {personalData.about}
        </Description>

        <ContactInfo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ContactItem>
            <FaPhone />
            <a href={`tel:${personalData.phone}`}>{personalData.phone}</a>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
          </ContactItem>
        </ContactInfo>

        <SocialLinks
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {personalData.socialLinks.map((link) => {
            const Icon = iconComponents[link.icon];
            return (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <Icon />
              </a>
            );
          })}
        </SocialLinks>
      </ContentWrapper>

      <ProfileWrapper>
        <ProfilePhoto
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src="./assets/profile.jpg" 
            alt={`${personalData.name} - ${personalData.position}`}
            loading="eager"
          />
        </ProfilePhoto>
      </ProfileWrapper>
    </HeroContainer>
  );
};

export default HeroWithProfile;