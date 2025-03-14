


import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryTvShowContainer = ({data}) => {
    const allTvShows = useSelector((store) => store.movies);
    console.log(allTvShows)

  return (
    allTvShows.nowPlayingMovies && (
      <div className="bg-black">
        <div className="pl-2 sm:pl-4 md:pl-8 lg:pl-12 -mt-20 relative z-30 space-y-10">
          <MovieList title={"Tv Show in India"} movies={allTvShows.indianTvShows} />
          <MovieList title={"International Tv Show"} movies={allTvShows.internationalTvShows} />
        </div>
      </div>
    )
  );
};

export default SecondaryTvShowContainer;
