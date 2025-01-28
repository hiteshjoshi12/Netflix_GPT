import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="mt-[80px]">
      <h1 className="text-2xl md:text-4xl py-4 mx-4 md:py-0 md:font-bold text-white">{title}</h1>
      <div className="yolo flex overflow-x-auto scrollbar-hide space-x-4">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <div
              key={movie.id}
              className="w-72 md:w-96 flex flex-col items-center justify-center rounded-lg p-4"
            >
              <MovieCard posterPath={movie.poster_path} />
              <h2 className="text-white text-center p-2 font-medium text-base md:text-xl md:font-bold">
                {movie.original_title}
              </h2>
              <p className="text-white text-sm md:text-xl font-medium md:font-normal p-2 text-center">
                {truncateText(movie.overview, 100)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
