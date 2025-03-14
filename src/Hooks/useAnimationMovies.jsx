import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addAnimationMovies } from "../Utils/movieSlice";
import { options } from "../Utils/Constants";

const useAnimationMovies = () => {
  const dispatch = useDispatch();
  const animationMovies = useSelector((store) => store.movies.animationMovies);

  const fetchAnimationMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=16",
      options
    );
    const data = await response.json();
    dispatch(addAnimationMovies(data.results));
  };

  useEffect(() => {
    if (!animationMovies) fetchAnimationMovies();
  }, []);
};

export default useAnimationMovies;
