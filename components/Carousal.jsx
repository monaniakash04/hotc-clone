"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import kiara from "../media/kiara-sidharth/kiara2.jpg";
import alia from "../media/ranbir-alia/ranbir-alia-marriage.jpeg";
import alia2 from "../media/ranbir-alia/Ranbir-Alia.jpg";
import alia3 from "../media/ranbir-alia/ra2.webp";
import alia4 from "../media/ranbir-alia/ra3.webp";
import alia5 from "../media/ranbir-alia/ra4.png";
import alia6 from "../media/ranbir-alia/ra5.jpeg";
import Image from "next/image";

export default function Carousal() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper h-[90vh] w-full"
      >
        <SwiperSlide className="w-full h-full">
          <Image src={kiara} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={alia2} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={alia3} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={alia4} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={alia5} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={alia6} className="w-full h-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
