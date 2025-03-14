import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addActionThrillerMovies } from "../Utils/movieSlice";
import { options } from "../Utils/Constants";

const useActionThrillerMovies = () => {
  const dispatch = useDispatch();
  const actionThrillerMovies = useSelector((store) => store.movies.actionThrillerMovies);

  const fetchActionThrillerMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=28,53",
      options
    );
    const data = await response.json();
    dispatch(addActionThrillerMovies(data.results));
  };

  useEffect(() => {
    if (!actionThrillerMovies) fetchActionThrillerMovies();
  }, []);
};

export default useActionThrillerMovies;
