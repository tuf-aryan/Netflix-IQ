import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { BODY_LOGO } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
    <div className="fixed -z-10"> <img className=" h-screen w-screen object-cover" src={BODY_LOGO} alt="logo" /></div>
     <div className="">
      <GptSearchBar />
      <GptMoviesSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
