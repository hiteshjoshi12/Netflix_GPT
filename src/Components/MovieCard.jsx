import { IMG_CDN } from "../Utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-44  md:w-56 cursor-pointer hover:scale-105 transition-transform">
      <img 
        alt="Movie Card" 
        src={IMG_CDN + posterPath} 
        className="rounded-lg w-full object-cover" 
      />
    </div>
  );
};

export default MovieCard;
