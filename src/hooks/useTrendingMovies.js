import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrendingMovies } from "../utils/moviesSlice";
import { API_OPTION } from "../utils/constants";
const useTrendingMovies = ()=>{
     const dispatch = useDispatch();
 const getTrendingMovies = async ()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION);
     const json = await data.json();
     dispatch(addTrendingMovies(json.results));

 };

useEffect(()=>{
  getTrendingMovies();
},[]); 
};

export default useTrendingMovies;