import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { personalData } from '../data';

const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0078d7;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    background-color: #fff;
    transition: all 0.3s ease;
    padding: 1rem 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.li`
  margin-left: 2rem;

  a {
    color: #333;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #0078d7;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0.5rem 2rem;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>{personalData.name}</Logo>
        
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <NavLinks isOpen={isOpen}>
          <NavLink><a href="#home" onClick={() => setIsOpen(false)}>Home</a></NavLink>
          <NavLink><a href="#carousel" onClick={() => setIsOpen(false)}>Gallery</a></NavLink>
          <NavLink><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></NavLink>
          <NavLink><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></NavLink>
          <NavLink><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></NavLink>
          <NavLink><a href="#education" onClick={() => setIsOpen(false)}>Education</a></NavLink>
          <NavLink><a href="#cv" onClick={() => setIsOpen(false)}>Resume</a></NavLink>
          <NavLink><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;