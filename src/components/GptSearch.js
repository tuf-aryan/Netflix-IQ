import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { BODY_LOGO } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
    <div className="fixed -z-10"> <img src={BODY_LOGO} alt="logo" /></div>
     
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  );
};

export default GptSearch;
