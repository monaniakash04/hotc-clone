"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/vimeo";
import { filmspage } from "@/data/Data";
import SuggestedPost from "@/components/SuggestedPost";

const Page = ({ params }) => {
  const [isClient, setIsClient] = useState(false);
  const [profileData, setProfileData] = useState(
    filmspage.find((item) => {
      return params.vid == item.id;
    })
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-[#f0e9e0]">
      <Header />
      <div className="h-full w-full flex  flex-col items-center">
        {isClient ? (
          <div className="relative" style={{ width: "100%", height: "500px" }}>
            <ReactPlayer
              url={`https://player.vimeo.com/video/${profileData.videolink}`}
              style={{ position: "absolute", top: 0, left: 0 }}
              width="100%"
              height="100%"
              controls
            />
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <div className=" flex flex-col items-center mt-5 max-w-5xl h-[400px]">
          <p className="text-sm font-serif">EPIC:{profileData.date}</p>
          <p className="md:text-3xl text-2xl font-serif">{profileData.name}</p>
          <p className="md:text-xl text-center text-lg font-serif">
            {profileData.description}
          </p>
        </div>
        <h1 className="md:text-4xl text-xl mb-5 font-serif text-left">
          You Might Also Like
        </h1>
        <div className=" md:gap-5 md:flex-nowrap flex-wrap  max-w-6xl min-h-[400px] flex justify-center items-center">
          {filmspage.map((item, idx) => {
            const { id, poster, name } = item;
            return idx < 4 ? (
              <SuggestedPost id={id} name={name} poster={poster} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
