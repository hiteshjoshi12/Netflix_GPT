import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" -mt-28 pl-2 relative z-30">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topratedmovies} />
          <MovieList title={"Popular"} movies={movies.popularmovies} />
          <MovieList title={"Upcoming Movies"}movies={movies.upcomingmovies}/>
          {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;