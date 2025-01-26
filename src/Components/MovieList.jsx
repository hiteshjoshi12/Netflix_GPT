import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="mt-[70px] px-4 sm:px-6 lg:px-8 xl:px-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl py-4 text-white">{title}</h1>
      <div className="yolo flex overflow-x-auto scrollbar-hide space-x-4">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <div
              key={movie.id}
              className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-1/5  flex flex-col items-center justify-start rounded-lg p-4"
            >
              <MovieCard posterPath={movie.poster_path} />
              <h2 className="text-white text-center p-2 font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {movie.original_title}
              </h2>
              <p className="text-white text-sm sm:text-base font-medium p-3">
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
