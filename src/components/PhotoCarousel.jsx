import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa';

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 3rem auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const SlideImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Caption = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 120, 215, 0.85);
  color: white;
  padding: 1.2rem;
  text-align: center;
  font-size: 1.1rem;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  color: #0078d7;
  font-size: 1.1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }

  &:first-child {
    left: 20px;
  }

  &:last-child {
    right: 20px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  gap: 10px;
`;

const DotButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.$active ? '#0078d7' : '#adb5bd'};
  cursor: pointer;
  font-size: 0.7rem;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    color: #0078d7;
    transform: scale(1.3);
  }
`;

// Animation variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 }
    }
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

const ProjectCarousel = () => {
  // Project data from your portfolio
  const projects = [
    {
      id: 1,
      title: "YUM Brands",
      description: "Technical Specialist working on KFC, Pizza Hut, and Taco Bell platforms",
      image: "./assets/yum-project.jpg",
      technologies: ["Node.js", "React", "AWS"]
    },
    {
      id: 2,
      title: "HID Global",
      description: "Mobile access control system using Apple Wallet integration",
      image: "./assets/hid-project.jpg",
      technologies: ["Node.js", "Apple Wallet API", "PACS"]
    },
    {
      id: 3,
      title: "AWAK Medical",
      description: "Dialysis patient management system backend services",
      image: "./assets/awak-project.jpg",
      technologies: ["Node.js", "AWS", "Microservices"]
    },
    {
      id: 4,
      title: "Licious",
      description: "E-commerce platform for meat and seafood products",
      image: "./assets/licious-project.jpg",
      technologies: ["Node.js", "React", "Performance Optimization"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  }, [projects.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPlaying || projects.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, nextSlide, projects.length]);

  if (projects.length === 0) {
    return (
      <CarouselContainer>
        <SlideWrapper style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#f5f7fa',
          color: '#666'
        }}>
          No projects to display
        </SlideWrapper>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      id='carousel'
    >
      <SlideWrapper>
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={projects[currentIndex].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%'
            }}
          >
            <SlideImage
              src={projects[currentIndex].image}
              alt={`${projects[currentIndex].title} project screenshot`}
              loading="lazy"
            />
            <Caption
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3>{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
              <div style={{ marginTop: '0.5rem' }}>
                {projects[currentIndex].technologies.join(' • ')}
              </div>
            </Caption>
          </motion.div>
        </AnimatePresence>

        {projects.length > 1 && (
          <>
            <NavButton 
              onClick={prevSlide}
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </NavButton>
            <NavButton 
              onClick={nextSlide}
              aria-label="Next project"
            >
              <FaChevronRight />
            </NavButton>
          </>
        )}
      </SlideWrapper>

      {projects.length > 1 && (
        <DotsContainer>
          {projects.map((_, index) => (
            <DotButton
              key={index}
              $active={index === currentIndex}
              onClick={() => goToSlide(index)}
              aria-label={`View ${projects[index].title} project`}
            >
              <FaCircle />
            </DotButton>
          ))}
        </DotsContainer>
      )}
    </CarouselContainer>
  );
};

export default ProjectCarousel;