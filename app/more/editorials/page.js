import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import first from "../../../media/editorials/first.jpg";
import second from "../../../media/editorials/second.gif";
import third from "../../../media/editorials/third.jpg";
import fourth from "../../../media/editorials/fourth.gif";
import fifth from "../../../media/editorials/fifth.jpg";
import sixth from "../../../media/editorials/sixth.gif";
import sevath from "../../../media/editorials/sevath.jpg";
import eighth from "../../../media/editorials/eighth.jpg";
import ninth from "../../../media/editorials/ninth.jpg";
import tenth from "../../../media/editorials/tenth.jpg";
import elevan from "../../../media/editorials/elevan.jpg";
import twelve from "../../../media/editorials/twelve.jpg";
import thirteen from "../../../media/editorials/thirteen.jpg";
import fourteen from "../../../media/editorials/fourteen.jpg";
import fifteen from "../../../media/editorials/fifteen.jpg";
import sixteen from "../../../media/editorials/sixteen.jpg";
import seventeen from "../../../media/editorials/seventeen.jpg";
import eighteen from "../../../media/editorials/eighteen.png";

const Editorials = () => {
  return (
    <div className="bg-[#f0e9e0]">
      <Header />
      <div className="mt-5 w-full min-h-screen justify-center items-center gap-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {/* first row */}
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={third}
            className="w-full h-full object-cover"
            alt="third"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={second}
            className="w-full h-full object-cover"
            alt="second"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={third}
            className="w-full h-full object-cover"
            alt="first"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={fourth}
            className="w-full h-full object-cover"
            alt="fourth"
          />
        </div>
        {/* second row */}
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={fifth}
            className="w-full h-full object-cover"
            alt="third"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={sixth}
            className="w-full h-full object-cover"
            alt="second"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={sevath}
            className="w-full h-full object-cover"
            alt="first"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image src={eighth} className="w-full h-full " alt="fourth" />
        </div>
        {/* third */}
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={ninth}
            className="w-full h-full object-cover"
            alt="third"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={tenth}
            className="w-full h-full object-cover"
            alt="second"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={elevan}
            className="w-full h-full object-cover"
            alt="first"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image src={twelve} className="w-full h-full " alt="fourth" />
        </div>
        {/* fourth row */}
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={thirteen}
            className="w-full h-full object-cover"
            alt="third"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={fourteen}
            className="w-full h-full object-cover"
            alt="second"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image
            src={fifteen}
            className="w-full h-full object-cover"
            alt="first"
          />
        </div>
        <div className="max-w-[500px] h-[400px] ">
          <Image src={sixteen} className="w-full h-full " alt="fourth" />
        </div>
      </div>
    </div>
  );
};

export default Editorials;
