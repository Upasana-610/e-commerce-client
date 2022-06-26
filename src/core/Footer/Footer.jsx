import React from "react";

import { Animation, Footercs, Footercss } from "./Footer.style";
const Footer = () => {
  return (
    <Footercss>
      <Footercs>
        <h4>
          {new Date().getFullYear()} Made by Upasana Pan{" "}
          <a
            href="https://www.linkedin.com/in/upasana-pan-b416451b7/"
            target="_blank"
            rel="norefferer"
          >
            Linked In
          </a>
        </h4>
      </Footercs>
    </Footercss>
  );
};

export default Footer;
