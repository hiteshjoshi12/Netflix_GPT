import React from 'react';
import Gptsearchbar from './Gptsearchbar';
import Gptmoviesuggestions from './Gptmoviesuggestions';
import { banner } from '../Utils/Constants';

const GptSearch = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          src={banner}
          alt="NETFLIX"
          className="w-full h-full object-cover"
          />
      </div>
      <div className="relative z-10">
        <Gptsearchbar />
        <Gptmoviesuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
