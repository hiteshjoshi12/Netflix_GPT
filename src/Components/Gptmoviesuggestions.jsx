import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Gptmoviesuggestions = () => {
  const { movieresults, moviename } = useSelector((store) => store.gpt);
  if(!moviename) return null;


  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90 rounded-xl">
      <div>
        {
          moviename.map((moviename,index)=> <MovieList key={moviename} title = {moviename} movies={movieresults[index]} />)
        }
       
      </div>
    </div>
  )
};

export default Gptmoviesuggestions;
