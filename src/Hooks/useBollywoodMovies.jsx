import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addBollywoodMovies } from "../Utils/movieSlice";
import { options } from "../Utils/Constants";

const useBollywoodMovies = () => {
  const dispatch = useDispatch();
  const bollywoodMovies = useSelector((store) => store.movies.bollywoodMovies);

  const fetchBollywoodMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_origin_country=IN",
      options
    );
    const data = await response.json();
    dispatch(addBollywoodMovies(data.results));
  };

  useEffect(() => {
    if (!bollywoodMovies) fetchBollywoodMovies();
  }, []);
};

export default useBollywoodMovies;
