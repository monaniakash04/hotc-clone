"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SuggestedPost = ({ id, poster, name }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/Films/${id}`)}
      className="max-w-[400px] cursor-pointer h-[390px] flex flex-col items-start"
    >
      <div className="max-w-full h-[200px]">
        <Image src={poster} className="w-full h-full object-contain" />
      </div>
      <p className="text-xl font-serif">{name}</p>
    </div>
  );
};

export default SuggestedPost;
