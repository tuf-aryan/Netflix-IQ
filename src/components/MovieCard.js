import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if(!poster_path)return ;
  return (
    <div className="inline-block">
      
      <img className="md:w-40 w-32 pr-4 md:h-[200px] h-[150px]" alt="Moviecard" src={IMG_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
