"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Sta from "../media/films/filmsfirst.avif";

const FilmsCard = ({ id, name, date, poster, description, videolink }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/Films/${id}`);
      }}
      className="max-w-2xl cursor-pointer max-h-[500px] flex flex-col items-center justify-center gap-2"
    >
      <div className="w-full h-[200px]">
        <Image src={poster} className="w-full h-full object-contain" alt="" />
      </div>
      <p className="text-[15px] font-serif">{name}</p>
      <p className="text-[12px] font-serif text-center">
        {description.slice(30)}
      </p>
      <p className="text-[12px] font-serif text-center">{date}</p>
    </div>
  );
};

export default FilmsCard;
