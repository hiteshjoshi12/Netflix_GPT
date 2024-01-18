import React from 'react'
import lang from '../Utils/LanguageConstants'
import { useSelector } from 'react-redux'

const Gptsearchbar = () => {
  const langkey = useSelector(store =>store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg' >
            <input type="text" className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[langkey].gptserachplaceholder} />
            <button className=' col-span-3 m-4 py-2 bg-red-700 text-white rounded-lg'>{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default Gptsearchbar