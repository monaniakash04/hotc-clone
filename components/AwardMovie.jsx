"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const AwardMovie = () => {
  return (
    <div className="max-w-[300px] h-[200px]">
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/261599147?h=95a48805e6"
        className="w-full h-full"
        frameborder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AwardMovie;
