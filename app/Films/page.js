"use client";
import FilmsCard from "@/components/FilmsCard";
import Header from "@/components/Header";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../media/films/logo.png";
import award from "../../media/awards.png";
import { filmspage } from "@/data/Data";

const Films = () => {
  const [films, setFilms] = useState(filmspage);
  return (
    <div className="bg-[#f0e9e0] ">
      <Header />
      <div className="min-h-full gap-10 w-full mt-10 flex flex-col items-center">
        <h1 className="md:text-4xl text-2xl font-serif ">
          Inspired by Cinema,
        </h1>
        <div className="max-w-7xl gap-8 md:p-6 p-3 min-h-[500px] grid md:grid-cols-3 bg-white rounded-lg shadow-lg">
          {films.map((item, idx) => {
            const { id, name, videolink, date, poster, description } = item;
            return idx > 5 ? null : (
              <FilmsCard
                id={id}
                name={name}
                date={date}
                videolink={videolink}
                poster={poster}
                description={description}
              />
            );
          })}
        </div>

        <div className="w-full max-h-[400px] flex justify-center items-center flex-col">
          <div className="max-w-[300px] h-[250px]">
            <Image
              src={logo}
              className="w-full h-full object-contain"
              alt="logo"
            />
          </div>
          <p className="dancing-script-400">
            Films that take a deep dive into the emotions that surround a
            typical Indian wedding.
          </p>
        </div>
        <div className="w-full max-h-[400px] flex justify-center items-center">
          <div className="max-w-[500px] h-[300px]">
            <Image src={award} className="w-full h-full object-contain " />
          </div>
        </div>
        <div className="max-w-7xl gap-8 md:p-6 p-3 min-h-[500px] grid md:grid-cols-3 bg-white rounded-lg shadow-lg">
          {films.map((item, idx) => {
            const { id, name, date, videolink, poster, description } = item;
            return idx < 6 ? null : (
              <FilmsCard
                id={id}
                name={name}
                date={date}
                poster={poster}
                videolink={videolink}
                description={description}
              />
            );
          })}
        </div>

        <div className="w-full min-h-[400px] rounded-b-[24%] flex justify-center items-center filmsimg">
          <h1 className="text-4xl text-white font-serif">
            Every wedding is unique, and so are our films
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Films;
