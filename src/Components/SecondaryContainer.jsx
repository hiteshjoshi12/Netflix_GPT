import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ({data}) => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="pl-2 sm:pl-4 md:pl-8 lg:pl-12 -mt-20 relative z-30 space-y-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topratedmovies} />
          <MovieList title={"Popular"} movies={movies.popularmovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingmovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
