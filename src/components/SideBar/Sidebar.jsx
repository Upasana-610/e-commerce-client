import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { FiExternalLink, FiGithub, FiFileText, FiLinkedin } from "react-icons/fi";
import {
  SidebarContainer,
  SidebarLink,
  Icon,
  Overlay,
  HamburgerWrapper,
  Title,
} from "./Sidebar.style";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = [
    {
      name: "Visit My Portfolio",
      href: "https://upasana-s-expedition.vercel.app/",
      icon: <FiExternalLink />,
    },
    { name: "Github", href: "https://github.com/Upasana-610", icon: <FiGithub /> },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1h2xtGiZ1gufMv8Ftc2xRVnhtIr5GFY4y/view?usp=sharing",
      icon: <FiFileText />,
    },
    {
      name: "Linked In",
      href: "https://www.linkedin.com/in/upasana-pan-610upa/",
      icon: <FiLinkedin />,
    },
  ];

  return (
    <>
      {/* Hamburger icon */}
      <HamburgerWrapper>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
      </HamburgerWrapper>

      {/* Sidebar */}
      <SidebarContainer isOpen={isOpen}>
        {links.map((link) => (
          <SidebarLink
            key={link.name}
            href={link.href}
            active={active === link.name}
            onClick={() => {
              setActive(link.name);
              setOpen(false); // close sidebar after clicking
            }}
          >
            <Icon>{link.icon}</Icon>
            {link.name}
          </SidebarLink>
        ))}
      </SidebarContainer>

      {/* Overlay */}
      {isOpen && <Overlay onClick={() => setOpen(false)} />}
    </>
  );
}
