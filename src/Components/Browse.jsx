import React from "react";
import Header from "./Header";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularmovies from "../Hooks/usePopularmovies";
import useTopratedmovies from "../Hooks/useTopratedmovies";
import useUpcomingmovies from "../Hooks/useUpcomingmovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const ShowGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  useNowplayingmovies();
  usePopularmovies();
  useTopratedmovies();
  useUpcomingmovies();

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    <div>
      {ShowGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer data ={movies} />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
