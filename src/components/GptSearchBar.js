import React from 'react'
import lang from '../utils/language'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.lang);
  return (
    <div className='pt-[11%] flex justify-center rounded-lg'>
     <form className='w-1/2 bg-black grid grid-cols-12 '>
        <input className="m-4 p-4 col-span-9 rounded-lg" placeholder={lang[langKey]?.gptSearchPlaceholder}></input>
        <button className='m-4 py-4 bg-rose-700 col-span-3 text-white rounded-lg'>{lang[langKey]?.search}</button>
     </form>
    </div>
  )
}

export default GptSearchBar