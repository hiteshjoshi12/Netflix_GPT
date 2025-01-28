import { useEffect } from "react";
import { options } from "../Utils/Constants";



const useMovieTrailer = ({ movieid, setTrailerId }) => {
  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
        options
      );
      const response = await data.json();
      const filterdata = response.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterdata.length ? filterdata[0] : response.results[0];
      setTrailerId(trailer ? trailer.key : null);
      
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
