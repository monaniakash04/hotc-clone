"use client";
import Header from "@/components/Header";
import PhotoGraphyComp from "@/components/PhotoGraphyComp";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { photography } from "@/data/Data";

const page = () => {
  const [list, setList] = useState(photography);
  const [regionFilter, setRegionFilter] = useState("all");

  useEffect(() => {
    Aos.init();
  }, []);

  const filterWeddingCardHandler = (re) => {
    re === "all"
      ? setList(photography)
      : setList(
          photography.filter((item) => {
            const { region } = item;
            return region === re ? item : null;
          })
        );
    setRegionFilter(re);
  };

  return (
    <>
      <div className="bg-[#f0e9e0] h-full">
        <Header />
        <div className="w-full flex justify-center">
          <div className="min-h-screen mt-10 max-w-7xl flex p-4 flex-col item-center bg-white shadow-lg rounded-2xl">
            {/* ṇavigation */}
            <div className="w-full font-serif h-[30px] gap-2 flex justify-center items-center">
              Select:{" "}
              <span
                className={`border-black cursor-pointer ${
                  regionFilter === "all" ? "border-b-2" : "border-b-0"
                }`}
                onClick={() => filterWeddingCardHandler("all")}
              >
                All
              </span>{" "}
              |{" "}
              <span
                className={`border-black cursor-pointer ${
                  regionFilter === "indian" ? "border-b-2" : "border-b-0"
                }`}
                onClick={() => filterWeddingCardHandler("indian")}
              >
                Indian
              </span>{" "}
              |
              <span
                className={`border-black cursor-pointer ${
                  regionFilter === "international" ? "border-b-2" : "border-b-0"
                }`}
                onClick={() => filterWeddingCardHandler("international")}
              >
                International
              </span>
            </div>
            {/* cards */}
            <div className="w-full gap-2 mt-5  h-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
              {list.map((it, idx) => {
                const { id, name, poster, description, region } = it;
                return (
                  <PhotoGraphyComp
                    delay={idx * 100}
                    id={id}
                    name={name}
                    poster={poster}
                    description={description}
                    region={region}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
