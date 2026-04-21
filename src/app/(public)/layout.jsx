import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}

      <Footer></Footer>
    </>
  );
};

export default PublicLayout;
