import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className=" pt-[28%] md:pt-[18%] px-10 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="md:text-5xl text-2xl font-bold">{title}</h1>
      <h1 className="py-5 text-md w-1/3 hidden md:inline-block">{description}</h1>
      <div className="flex">
         <button className="bg-white text-black md:w-36 w-20 my-2 md:my-0 h-8 md:h-12 mr-2 font-bold text-xl rounded-md hover:bg-opacity-70">▶ Play</button>
      <button className="bg-gray-500 hidden md:inline-block text-white font-bold w-36 h-12  text-xl bg-opacity-55 rounded-md">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
