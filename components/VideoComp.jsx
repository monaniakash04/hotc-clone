"use client";
import { useState } from "react";
import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoComp = ({ url }) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      {isClick ? (
        <iframe
          title="vimeo-player"
          className=" w-full h-full"
          src="https://player.vimeo.com/video/261599147?h=95a48805e6"
          // style={{ width: "100%", height: "100%" }}
          frameborder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-full h-full relative">
          <img
            src={url}
            data-aos-once={true}
            data-aos="fade-down"
            data-aos-delay="200"
            onClick={() => {
              setIsClick(true);
            }}
            alt="no image"
            className="w-full h-full object-contain"
          />
          <FaPlay
            className="absolute inset-0 m-auto text-white"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      )}
    </>
  );
};

export default VideoComp;
