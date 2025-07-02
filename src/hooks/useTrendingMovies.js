import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrendingMovies } from "../utils/moviesSlice";
import { API_OPTION } from "../utils/constants";
const useTrendingMovies = ()=>{
  const popularMovies = useSelector(store=>store.movies.popularMovies)
     const dispatch = useDispatch();
 const getTrendingMovies = async ()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION);
     const json = await data.json();
     dispatch(addTrendingMovies(json.results));

 };

useEffect(()=>{
  !popularMovies &&  getTrendingMovies();
},[]); 
};

export default useTrendingMovies;