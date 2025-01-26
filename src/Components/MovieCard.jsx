import { IMG_CDN } from "../Utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-28 sm:w-36 md:w-48 lg:w-56 xl:w-64 pr-4 cursor-pointer hover:scale-105 transition-transform">
      <img 
        alt="Movie Card" 
        src={IMG_CDN + posterPath} 
        className="rounded-lg w-full object-cover" 
      />
    </div>
  );
};

export default MovieCard;
