import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { options } from "../Utils/Constants";
import { useEffect } from "react";

const usePopularmovies = () =>{
    const dispatch = useDispatch();
    const popularmovies = useSelector(store=>store.movies.popularmovies);
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        options
      );
  
      const response = await data.json();
     
      dispatch(addPopularMovies(response.results))
    };
  
    useEffect(() => {
      !popularmovies && getPopularMovies();
    }, []);
}

export default usePopularmovies;