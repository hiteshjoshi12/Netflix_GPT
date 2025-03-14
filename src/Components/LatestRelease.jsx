import React from "react";
import MainContainer from "./MainContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useLatestReleases from "../Hooks/useLatestReleases";
import SecondaryLatestReleaseContainer from "./SecondaryLatestReleaseContainer";

const LatestReleases = () => {
  const ShowGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  useLatestReleases();
  
  const latestReleases = useSelector((store) => store.movies.latestReleases);

  console.log(latestReleases);
 

  return (
    <div>
      {ShowGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {/* Pass the latest releases to MainContainer if data exists */}
          {latestReleases && <MainContainer data={latestReleases} />}
          <SecondaryLatestReleaseContainer />
        </>
      )}
    </div>
  );
};

export default LatestReleases;
