import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)

  return (
    <div className=' bg-black'>
    <div className='-mt-60  relative pl-8 z-10'>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies ={movies.trendingMoives}/>
      <MovieList title={"Popular"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer