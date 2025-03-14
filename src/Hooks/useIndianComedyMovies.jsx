import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addIndianComedyMovies } from "../Utils/movieSlice";
import { options } from "../Utils/Constants";

const useIndianComedyMovies = () => {
  const dispatch = useDispatch();
  const indianComedyMovies = useSelector((store) => store.movies.indianComedyMovies);

  const fetchIndianComedyMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_origin_country=IN&with_genres=35",
      options
    );
    const data = await response.json();
    dispatch(addIndianComedyMovies(data.results));
  };

  useEffect(() => {
    if (!indianComedyMovies) fetchIndianComedyMovies();
  }, []);
};

export default useIndianComedyMovies;
