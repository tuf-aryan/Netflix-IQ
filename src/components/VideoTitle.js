import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className=" pt-[18%] px-10 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h1 className="py-5 text-md w-1/3">{description}</h1>
      <div className="flex">
         <button className="bg-white text-black w-36 h-12 mr-2 font-bold text-xl rounded-md hover:bg-opacity-70">▶ Play</button>
      <button className="bg-gray-500 text-white font-bold w-36 h-12  text-xl bg-opacity-55 rounded-md">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
