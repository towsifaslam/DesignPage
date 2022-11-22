import React, { useRef, useState } from "react";
import heroVideo from "../asset/heroVideo.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";
function HeroSection({ isMenuShown }) {
  const [isVideoPlaying, setIsvideoPlaying] = useState(true);
  const videRef = useRef();

  const handleVideoPause = () => {
    videRef.current.pause();
    setIsvideoPlaying(false);
  };
  const handleVideoPlay = () => {
    videRef.current.play();
    setIsvideoPlaying(true);
  };
  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        src={heroVideo}
        ref={videRef}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />
      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? "" : "bg-black/80"
        } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
        <h1 className="text-5xl lg:text-7xl">Web 3.0</h1>
        <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          the <span className="text-blue-400 font-bold">Futuer</span> is here
        </h1>
        <div className="flex flex-row justify-center items-center">
          <GradientBtn clasName="capitalize" title="get anton" />
          <GradientBtn clasName="capitalize mx-12" title="Products" />
          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 text-blue-400"
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPlay}
              className="cursor-pointer hover:scale-110 duration-200 text-blue-400"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
