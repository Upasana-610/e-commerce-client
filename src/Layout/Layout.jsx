import React from "react";
import Footer from "./../core/Footer/Footer";
import Navbar from "./../core/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
