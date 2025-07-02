import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTION } from "../utils/constants";
const useNowPlayingMovies = ()=>{
     const dispatch = useDispatch();
     const nowPlayingMoives = useSelector(store=>store.movies.nowPlayingMoives)
 const getNowPlayingMovies = async ()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
     const json = await data.json();
     dispatch(addNowPlayingMovies(json.results));

 };

useEffect(()=>{
  if(!nowPlayingMoives) getNowPlayingMovies();
},[]); 
};

export default useNowPlayingMovies;