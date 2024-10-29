"use client";
import React from "react";
import "../app/globals.css";
import { useRouter } from "next/navigation";

const PhotoGraphyComp = ({ delay, id, name, poster, description, region }) => {
  const router = useRouter();
  return (
    <div
      data-aos="fade-down"
      data-aos-delay={delay}
      onClick={() => {
        router.push(`photos/${id}`);
      }}
      className="max-w-[700px] p-2 flex  items-start flex-col gap-2 h-[400px]"
    >
      <div className="w-full h-[200px]">
        <img
          src={poster}
          className="w-full h-full object-cover rounded-md "
          alt="error"
        />
      </div>
      <div className="w-full flex-col flex gap-2">
        <h1 className="text-md font-serif">{name}</h1>
        <p className="md:text-[14px] text-[12px] dancing-script-400  font-serif">
          {description.slice(30)}
        </p>
        <h1 className="text-[10px] font-serif ">Read More -</h1>
        <h1 className="text-sm  dancing-script-400 ">{region}</h1>
      </div>
    </div>
  );
};

export default PhotoGraphyComp;
