"use client";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
import textImg from "../media/text.png";
import textImg2 from "../media/text2.png";
import kiaraImg from "../media/kiara-sidharth/kiara.jpg";
import Carousal from "@/components/Carousal";
import WeddingCard from "@/components/WeddingCard";
import { data } from "@/data/Data";
import soul from "../media/soul2.png";
import award from "../media/awards.png";
import { books } from "@/data/Data";
import mar from "../media/mar.png";
import Footer from "@/components/Footer";
import VideoComp from "@/components/VideoComp";
import first from "../media/all/thumbnail/first.jpg";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="max-h-full bg-[#f0e9e0]">
        <div className="min-h-screen w-full img-div ">
          <Header textc={"white"} />
        </div>
        {/* texts */}
        <div className="min-h-[30vh] p-2 w-full  bg-[#f0e9e0] flex justify-center ">
          <div className="flex flex-col p-3 items-center max-w-5xl max-h-full rounded-xl shadow-lg bg-white">
            <div className="h-[90px] max-w-lg">
              <Image
                src={textImg}
                data-aos-once={true}
                data-aos="fade-down"
                data-aos-delay="100"
                alt="text"
                className="w-full h-full"
              />
            </div>
            <div className="flex md:flex-nowrap flex-wrap  gap-5 mt-3 justify-center items-center  max-w-full">
              {/* image */}
              <div className="max-w-lg rounded-xl min-h-[400px]">
                <Image
                  src={kiaraImg}
                  data-aos-once={true}
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* content */}
              <div className="max-w-xl px-3 flex flex-col gap-10">
                <p
                  data-aos-once={true}
                  data-aos="fade-down"
                  data-aos-delay="200"
                  className="text-justify dancing-script-400 text-xl"
                >
                  Considered to be the epitome of Modern Photography and
                  Filmmaking, HOTC has transformed the Indian Wedding landscape
                  on a regular basis. For almost a decade House On The Clouds
                  has been creating photographs and films which are timeless and
                  have been etched in memories of thousands of people forever.
                </p>
                <div className="h-[90px] max-w-lg">
                  <Image
                    src={textImg2}
                    alt="text"
                    data-aos-once={true}
                    data-aos="fade-down"
                    data-aos-delay="300"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slider */}
        <div className="w-full mt-10 ">
          <Carousal />
        </div>

        {/* all weddings */}
        <div className="max-h-full w-full bg-slate-50 mt-16 flex justify-center items-center">
          <div className="min-h-full grid md:gap-5 gap-2 p-2  md:grid-cols-4  sm:grid-cols-2 md:max-w-[900px] w-full">
            {data.map((e, idx) => {
              const { image, name, date, id } = e;
              return (
                <WeddingCard
                  img={image}
                  key={id}
                  id={id}
                  delay={idx * 100}
                  name={name}
                  date={date}
                />
              );
            })}
          </div>
        </div>

        {/* soul+cinema */}
        <div className="min-h-[800px] mb-10  w-full bg mt-16 flex justify-center items-center ">
          <div className="max-w-3xl  h-[500px] gap-0 flex justify-center items-center flex-col">
            <div className="w-full h-[300px] z-0">
              <Image
                src={soul}
                data-aos-once={true}
                data-aos="fade-down"
                data-aos-delay="100"
                className="w-full h-full object-contain"
              />
            </div>
            <p
              data-aos-once={true}
              data-aos="fade-down"
              data-aos-delay="200"
              className="md:text-xl mx-3 text-white z-2 text-lg text-justify dancing-script-400 font-medium"
            >
              Every wedding is unique and so are our films. For past 8 years
              HOTC has set new benchmarks of of storytelling within wedding
              realm and beyond. We are fortunate to have experienced so unique
              cultures and traditions across 25 countries and to document
              stories that continuously overwhelm us.
            </p>
          </div>
        </div>

        {/*
        award winning films 
         */}
        <div className="w-full p-3  flex bg-[#f0e9e0]  flex-col min-h-full  items-center">
          <h1 className="md:text-3xl text-xl font-serif font-light">
            AWARD WINNING FILMS
          </h1>
          <div className="max-w-3xl mt-[-37px] md:mt-[-5px] h-[200px]">
            <Image
              src={award}
              className="w-full  h-full object-contain"
              alt="awards"
            />
          </div>
          <div className="max-w-5xl mt-[-100px] md:mt-0 gap-4  flex flex-col md:flex-row max-h-full min-h-[550px]">
            <div className="max-w-lg h-[550px]">
              <div className="max-w-lg h-[390px]">
                <VideoComp url="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/85c583f0-fa69-4b6b-a7e2-26c6c9da70be/kkjk+copy.jpg?format=1000w" />
              </div>
              <div className="text-lg mt-[-50px] md:mt-0 font-serif">
                Love In Second Innings
              </div>
              <div className="text-md dancing-script-400">
                Second marriage, for many, is still a taboo. And this story
                illustrates why it’s not. It’s a treatise on how the past
                doesn’t come in the way of love and respect. It’s a heroic tale
                of victory over stereotypes and archaic customs. It’s a story of
                how love always triumphs in the end. Every moment that we spent
                with Deepal and Nishant convinced us that life can be made
                beautiful… that tears can be turned into a drizzle of hope; that
                fear can be turned into the excitement of exploring the unknown;
                that the end is but a new beginning.
              </div>
            </div>
            <div className="max-w-lg min-h-[550px]">
              <div className="max-w-lg h-[390px]">
                <VideoComp url="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/85c583f0-fa69-4b6b-a7e2-26c6c9da70be/kkjk+copy.jpg?format=1000w" />
              </div>
              <div className="text-lg mt-[-50px] md:mt-0  font-serif">
                Love In Second Innings
              </div>
              <div className="text-md dancing-script-400">
                Second marriage, for many, is still a taboo. And this story
                illustrates why it’s not. It’s a treatise on how the past
                doesn’t come in the way of love and respect. It’s a heroic tale
                of victory over stereotypes and archaic customs. It’s a story of
                how love always triumphs in the end. Every moment that we spent
                with Deepal and Nishant convinced us that life can be made
                beautiful… that tears can be turned into a drizzle of hope; that
                fear can be turned into the excitement of exploring the unknown;
                that the end is but a new beginning.
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="w-full mt-5 h-[60px] justify-center items-center flex">
          <button className="px-2 text-[10px] py-3 bg-amber-800 font-serif text-white rounded-md ">
            Watch All Our Award Wining Films
          </button>
        </div>
        <div className="w-full mt-5 min-h-[100px] justify-center items-center flex">
          <div className="max-w-2xl flex gap-5 flex-col justify-center items-center">
            <p className="text-sm text-center  dancing-script-400 text-black">
              We at HOTC celebrate the wild ones , the rule breakers, the
              travellers , the new age modern couple who are not afraid to
              experiment. We believe the ultimate goal of a wedding photographer
              is to justify the vibe of the wedding and the personalities of the
              couple. And this approach has helped us experience weddings in a
              two bedroom apartments to weddings spread over 2 continents.
            </p>
            <p className="text-sm text-center  dancing-script-400 text-black">
              Here are some selected weddings from past couple of years to
              showcase the union of two people in the most authentic way
              possible.
            </p>
          </div>
        </div>

        {/* movies */}
        <div className="w-full min-h-screen flex justify-center ">
          <div className="max-w-full gap-5 md:grid md:grid-cols-2 flex-col flex">
            <div className="max-w-[560px] mt-2  h-[300px] aspect-[16/9]">
              <VideoComp url="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/85c583f0-fa69-4b6b-a7e2-26c6c9da70be/kkjk+copy.jpg?format=1000w" />
            </div>
            <div className="max-w-[560px] mt-2  h-[300px] aspect-[16/9]">
              <VideoComp url="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/85c583f0-fa69-4b6b-a7e2-26c6c9da70be/kkjk+copy.jpg?format=1000w" />
            </div>
            <div className="max-w-[560px] mt-2  h-[300px] aspect-[16/9]">
              <VideoComp url="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/80c27c1f-2552-47b6-9e68-566d4fc9f659/sid+saloni.remini-enhanced.jpg?format=1000w" />
            </div>
            <div className="max-w-[560px] mt-2  h-[300px] aspect-[16/9]">
              <VideoComp url="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/f27f9563-6fb3-4349-a812-9adf23b5fd23/YOGL6961+%28sss1%29.jpg?format=1000w" />
            </div>
          </div>
        </div>

        {/* books */}
        <div className="md:mt-5 w-full h-[200px] flex justify-center md:gap-5 gap-2 items-center flex-wrap">
          {books.map((e, idx) => {
            return (
              <>
                <div className="max-w-[300px] h-[150px] object-contain">
                  <Image
                    data-aos-once={true}
                    data-aos="fade-right"
                    data-aos-delay={idx * 100}
                    src={e}
                    className="w-full h-full"
                    alt="Images"
                  />
                </div>
              </>
            );
          })}
        </div>

        <div className="max-w-full  md:mt-0 mt-[260px] h-[500px] md:gap-5 gap-1 flex-wrap justify-center items-center flex">
          <div className="md:max-w-[560px]  w-full h-[300px] aspect-[16/9] relative">
            <VideoComp url="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1831013a-1767-4270-be7e-c0618fdfd6cc/AYUS3354+copy.jpg?format=1000w" />
          </div>
          <div className="md:max-w-[560px] w-full  h-[300px] aspect-[16/9] ">
            <VideoComp url="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1831013a-1767-4270-be7e-c0618fdfd6cc/AYUS3354+copy.jpg?format=1000w" />
          </div>
        </div>

        {/* 
          wedding photos
         */}
        <div className="w-full p-2 wedimg min-h-[90vh] md:mt-0 mt-[100px] flex flex-col   justify-center md:items-start items-center md:px-10">
          <div className="max-w-[500px] h-[90px]">
            <Image
              src={mar}
              className="h-full w-full object-contain"
              alt="text"
            />
          </div>
          <div className="max-w-[500px] flex flex-col gap-5 text-white dancing-script-400 text-justify">
            <p>
              Ibtida is our finest offering with fine-art editorial style
              photography lead by Siddharth Sharma, founder of House On The
              Clouds. The essence of Ibtida is to create photographs that stand
              the test of time. The classic, non-intrusive approach of
              documenting the most important day of your life with bright and
              airy images that take you back in time. This is an exclusive
              package which we offer to selected weddings only and we believe
              this deserves a website of its own. Click below to visit Ibtida.Co
            </p>
            <button className="px-3 py-2 max-w-[200px] rounded-md bg-amber-800 text-white">
              Visit ibtidia.co
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
