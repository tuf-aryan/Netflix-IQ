import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (id )=>{
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store=>store.movies.trailerVideo)
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    const filterData = json.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMoviesVideos();
  }, []);

}

export default useMovieTrailer;