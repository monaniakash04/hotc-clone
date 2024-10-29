import React from "react";
import Image from "next/image";
import virat from "../media/virushka/virushka2.jpg";

const WeddingCard = ({ img, name, date, id, delay }) => {
  return (
    <>
      <div
        data-aos-once={true}
        data-aos="fade-down"
        data-aos-delay={delay}
        className="md:max-w-[400px] w-full h-[400px] md:h-[300px]  "
      >
        <div className="w-full h-[350px] md:h-[250px]">
          <img className="w-full h-full object-fill" src={img} alt={name} />
        </div>
        <h1 className="font-serif text-sm font-medium">{name}</h1>
        <h1 className="font-serif font-light text-xs">{date}</h1>
      </div>
    </>
  );
};

export default WeddingCard;
