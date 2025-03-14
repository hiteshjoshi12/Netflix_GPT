import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryMoviesContainer = ({data}) => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="pl-2 sm:pl-4 md:pl-8 lg:pl-12 -mt-20 relative z-30 space-y-10">
          <MovieList title={"Bollywood Movies"} movies={movies.bollywoodMovies} />
          <MovieList title={"Hollywood Movies"} movies={movies.hollywoodMovies} />
          <MovieList title={"Action Thriller Movies"} movies={movies.actionThrillerMovies} />
          <MovieList title={"Romantic Movies"} movies={movies.romanticMovies} />
          <MovieList title={"Indian Comedy Movies"} movies={movies.indianComedyMovies} />
          <MovieList title={"Adventure Movies"} movies={movies.adventureMovies} />
          <MovieList title={"Animation Movies"} movies={movies.animationMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryMoviesContainer;
