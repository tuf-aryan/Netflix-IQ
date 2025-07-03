import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="md:text-3xl text-xl  py-3 text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide ">
      
        <div className=" whitespace-nowrap">
        {movies?.map((movie)=> <MovieCard key={movie?.id} poster_path={movie?.poster_path}/>)}
       </div>
      </div>
    </div>
  );
};

export default MovieList;
