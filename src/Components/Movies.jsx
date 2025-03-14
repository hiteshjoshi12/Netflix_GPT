import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useBollywoodMovies from "../Hooks/useBollywoodMovies";
import useHollywoodMovies from "../Hooks/useHollywoodMovies";
import useActionThrillerMovies from "../Hooks/useActionThrillerMovies";
import useRomanticMovies from "../Hooks/useRomanticMovies";
import useIndianComedyMovies from "../Hooks/useIndianComedyMovies";
import useAdventureMovies from "../Hooks/useAdventureMovies";
import useAnimationMovies from "../Hooks/useAnimationMovies";
import SecondaryMoviesContainer from "./SecondaryMoviesContainer";

const Movies = () => {
  const ShowGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  useBollywoodMovies();
  useHollywoodMovies();
  useActionThrillerMovies();
  useRomanticMovies();
  useIndianComedyMovies();
  useAdventureMovies();
  useAnimationMovies();

  

  const movies = useSelector((store) => store.movies?.actionThrillerMovies);
  return (
    <div>
      {ShowGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer data ={movies} />
          <SecondaryMoviesContainer />
        </>
      )}
    </div>
  );
};

export default Movies;
