import styled from "styled-components";

// You can import a modern font like 'Poppins' in your index.html or _app.js
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 220px;
  background-color: #2CB1D2;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 10px;
  padding-top: 65px;
  box-sizing: border-box;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease;
  z-index: 1001;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 650px) {
    width: 70%;
    padding: 30px 20px;
    padding-top: 65px;
  }
`;

export const SidebarLink = styled.a`
  width: 100%;
  padding: 20px 14px;
  margin: 6px 0;
  color: #fff;
  background-color: ${({ active }) => (active ? "#4e4eff" : "#1aa1c8")}; // base color
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600; // slightly bold
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #333354;
    color: #fff;
    transform: translateX(4px);
  }

  @media (max-width: 650px) {
    padding: 18px 12px;
    font-size: 15px;
  }
`;

export const Icon = styled.span`
  font-size: 20px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  color: #fff;

  @media (max-width: 650px) {
    font-size: 18px;
    margin-right: 10px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  margin: 0 0 25px 10px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 650px) {
    font-size: 18px;
    margin: 0 0 15px 5px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  transition: opacity 0.3s ease;

  @media (max-width: 650px) {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const HamburgerWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1100;
  cursor: pointer;

  @media (max-width: 650px) {
    top: 15px;
    left: 15px;
  }
`;
