import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addRomanticMovies } from "../Utils/movieSlice";
import { options } from "../Utils/Constants";

const useRomanticMovies = () => {
  const dispatch = useDispatch();
  const romanticMovies = useSelector((store) => store.movies.romanticMovies);

  const fetchRomanticMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=10749",
      options
    );
    const data = await response.json();
    dispatch(addRomanticMovies(data.results));
  };

  useEffect(() => {
    if (!romanticMovies) fetchRomanticMovies();
  }, []);
};

export default useRomanticMovies;
