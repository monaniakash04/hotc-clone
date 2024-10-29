import Header from "@/components/Header";
import React from "react";

const Backyard = () => {
  return (
    <div className="bg-[#f0e9e0]">
      <div className="min-h-screen w-full backimg">
        <Header />
      </div>
      <div className="min-h-[70vh] w-full backimg2"></div>
      <div className="min-h-[70vh] w-full backimg3"></div>
      <div className="min-h-[70vh] w-full backimg4"></div>
    </div>
  );
};

export default Backyard;
