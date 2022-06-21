import React from "react";

import { Animation, Footercs, Footercss } from "./Footer.style";
const Footer = () => {
  return (
    <Footercs>
      <h4>@ {new Date().getFullYear()} BIVERTY | All Rights Reserved</h4>
    </Footercs>
  );
};

export default Footer;
