import React from "react";
import logo from "../media/logo3.png";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex bg-[#f0e9e0] font-serif md:px-10 px-5 md:justify-between justify-center items-center min-h-[60vh]">
      <div className="max-w-2xl h-full gap-5 flex items-center justify-center flex-col">
        <div className="max-w-[600px] h-[70px]">
          <Image src={logo} className="w-full h-full" />
        </div>
        <div className="max-w-2xl gap-2 flex justify-center items-center">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
      <div className="max-w-2xl flex justify-between items-center gap-5">
        <div className="max-w-md flex flex-col gap-5 justify-center items-center">
          <h1>Mumbai,Banglore</h1>
          <h1>Privacy Policy</h1>
        </div>
        <div className="max-w-md flex flex-col gap-5 justify-center items-center">
          <h1>+91 9665562665</h1>
          <h1>akash@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
