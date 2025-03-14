import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addAdventureMovies } from "../Utils/movieSlice";
import { options } from "../Utils/Constants";

const useAdventureMovies = () => {
  const dispatch = useDispatch();
  const adventureMovies = useSelector((store) => store.movies.adventureMovies);

  const fetchAdventureMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=12",
      options
    );
    const data = await response.json();
    dispatch(addAdventureMovies(data.results));
  };

  useEffect(() => {
    if (!adventureMovies) fetchAdventureMovies();
  }, []);
};

export default useAdventureMovies;
