import React from 'react';
import lang from '../Utils/LanguageConstants';
import { useSelector } from 'react-redux';

const Gptsearchbar = () => {
  const langkey = useSelector(store => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-full sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-1/2 bg-black grid grid-cols-12 rounded-lg mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg text-sm sm:text-base"
          placeholder={lang[langkey].gptserachplaceholder}
        />
        <button className="col-span-3 m-4 py-2 bg-red-700 text-white rounded-lg text-sm sm:text-base">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
