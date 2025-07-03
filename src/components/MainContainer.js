import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if(movies===null)return;    
  const mainMovie = movies[3];
  const {id,original_title,overview} = mainMovie;
  return (
    <div className="md:pt-0 pt-[50%] sm:pt-[35%] bg-black ">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground id={id}/>
    </div>
  );
};

export default MainContainer;
