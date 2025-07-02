import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="inline-block">
      
      <img className="w-40 pr-4 h-[200px]" alt="Moviecard" src={IMG_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
