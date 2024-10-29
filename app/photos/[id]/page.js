"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import "../../globals.css";
import { photography } from "@/data/Data";
import Image from "next/image";

const Photos = ({ params }) => {
  const { id } = params;
  const [profile, setProfile] = useState(
    photography.find((item) => {
      return item.id == id;
    })
  );

  useEffect(() => {}, []);

  return (
    <>
      <div className="bg-[#f0e9e0]">
        <Header />
        <div className="min-h-full mt-10 flex justify-center h-full">
          <div className="max-w-6xl min-h-full flex p-3 gap-5 flex-col items-center">
            <h1 className="text-center dancing-script-400  text-lg">
              {profile.description}
            </h1>
            <div className="w-full border-2 gap-5  min-h-full flex flex-col items-center">
              <div className="max-w-[1000px]  min-h-[100px]">
                <Image
                  src={profile.imgs[1]}
                  alt="img"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="max-w-[1000px] flex justify-center gap-5 flex-wrap  border-2">
                <div className="max-w-[500px] h-[300px]">
                  <Image
                    src={profile.imgs[3]}
                    alt="img"
                    className="w-full h-full "
                  />
                </div>
                <div className="max-w-[300px] md:mt-14 mt-0 h-[300px]">
                  <Image
                    src={profile.imgs[2]}
                    alt="img"
                    className="w-full h-full "
                  />
                </div>
              </div>
              <div className="max-w-[1000px]  min-h-[100px]">
                <Image
                  src={profile.imgs[3]}
                  alt="img"
                  className="w-full h-full "
                />
              </div>
              <div className="max-w-[1000px] flex justify-center gap-5 flex-wrap  border-2">
                <div className="max-w-[500px] h-[300px]">
                  <Image
                    src={profile.imgs[5]}
                    alt="img"
                    className="w-full h-full "
                  />
                </div>
                <div className="max-w-[300px] md:mt-14 mt-0 h-[300px]">
                  <Image
                    src={profile.imgs[6]}
                    alt="img"
                    className="w-full h-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
