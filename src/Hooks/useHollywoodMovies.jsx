import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addHollywoodMovies } from "../Utils/movieSlice";
import { options } from "../Utils/Constants";

const useHollywoodMovies = () => {
  const dispatch = useDispatch();
  const hollywoodMovies = useSelector((store) => store.movies.hollywoodMovies);

  const fetchHollywoodMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_origin_country=US",
      options
    );
    const data = await response.json();
    dispatch(addHollywoodMovies(data.results));
  };

  useEffect(() => {
    if (!hollywoodMovies) fetchHollywoodMovies();
  }, []);
};

export default useHollywoodMovies;
