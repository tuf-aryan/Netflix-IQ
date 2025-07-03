import React, { useRef } from "react";
import lang from "../utils/language";
import { useSelector } from "react-redux";
import groqClient from "../utils/grogClient";
import { API_OPTION } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  ///Search Movie in TMDB
  const searchMovies = async (movies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movies +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movie for the query" +
      searchText.current.value +
      " only give me the 5 top movies with comma seprated i give the example to you Example:Gadar, Don, Hera Ferry, Love, Dhadak.With No explanation and gretting only name in contect you provide only movie name not any greeting and explanation";

    try {
      const gptResult = await groqClient.post("/chat/completions", {
        model: "llama3-70b-8192",
        messages: [
          {
            role: "system",
            content:
              "You are a movie recommendation assistant. Only reply with movie names, comma-separated. No greeting, no extra explanation.",
          },

          {
            role: "user",
            content: gptQuery,
          },
        ],
      });

      const getMovies =
        gptResult?.data?.choices[0]?.message?.content.split(",");
      const data = getMovies.map((movie) => searchMovies(movie));

      // retun 5 promis of array becuase u call a promis function a map on them
      const result = await Promise.all(data);
      dispatch(addGptMovieResult({movieNames:getMovies,movieResults:result}));
    } catch (err) {
      console.error("Groq API error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[11%] flex justify-center rounded-lg">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="m-4 p-4 col-span-9 rounded-lg"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        ></input>
        <button
          className="m-4 py-4 bg-rose-700 col-span-3 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
