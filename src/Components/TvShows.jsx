import React from "react";
import MainContainer from "./MainContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useIndianTvShows from "../Hooks/useIndianTvShows";
import SecondaryTvShowContainer from "./SecondaryTvShowContainer";
import useInternationalTvShows from "../Hooks/useInternationalTvShows";

const TvShows = () => {
  const ShowGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useInternationalTvShows();
  useIndianTvShows();

  const tvshow = useSelector((store) => store.movies?.indianTvShows);
  console.log(tvshow)

  return (
    <div>
      {ShowGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer data ={tvshow}  />
          <SecondaryTvShowContainer />
        </>
      )}
    </div>
  );
};

export default TvShows;
