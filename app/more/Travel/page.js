import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

import second from "../../../media/Travel/first.jpg";
import third from "../../../media/Travel/third.jpg";
import fourth from "../../../media/Travel/fourth.jpg";
import fifth from "../../../media/Travel/fifth.jpg";
import sixth from "../../../media/Travel/sixth.jpg";
import sevath from "../../../media/Travel/sevath.jpg";
import eighth from "../../../media/Travel/eighth.jpg";
import ninth from "../../../media/Travel/ninth.jpg";
import tenth from "../../../media/Travel/tenth.jpg";
import elevan from "../../../media/Travel/elevan.jpg";
import twelve from "../../../media/Travel/twelve.jpg";
import thirteen from "../../../media/Travel/thirteen.jpg";
import fourteen from "../../../media/Travel/fourteen.jpg";
import fifteen from "../../../media/Travel/fifteen.jpg";
import sixteen from "../../../media/Travel/sixteen.jpg";

const Travel = () => {
  return (
    <div className="bg-[#f0e9e0]">
      <Header />
      <div className="mt-5 w-full min-h-screen justify-center gap-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
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

export default Travel;
