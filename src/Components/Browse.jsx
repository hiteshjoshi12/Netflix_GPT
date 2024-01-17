import React from "react";
import Header from "./Header";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularmovies from "../Hooks/usePopularmovies";
import useTopratedmovies from "../Hooks/useTopratedmovies";
import useUpcomingmovies from "../Hooks/useUpcomingmovies";

const Browse = () => {
useNowplayingmovies();
usePopularmovies();
useTopratedmovies();
useUpcomingmovies();


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
