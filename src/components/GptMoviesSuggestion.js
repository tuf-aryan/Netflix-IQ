import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMoviesSuggestion = () => {
  const gpt = useSelector(store=>store.gpt);
  const {movieResults,movieNames} = gpt;
  if(!movieNames) return null;
  return (
    <div className='m-4 p-4 bg-black bg-opacity-90 text-white '>
      <div>
       {movieNames.map((movieNames,index)=>  <MovieList key={ movieNames} title={movieNames} movies={movieResults[index]}/>)}
      
      </div>

    </div>
  )
}

export default GptMoviesSuggestion