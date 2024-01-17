import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSclice";
import { options } from "../Utils/Constants";
import { useEffect } from "react";

const usePopularmovies = () =>{
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        options
      );
  
      const response = await data.json();
     
      dispatch(addPopularMovies(response.results))
    };
  
    useEffect(() => {
      getPopularMovies();
    }, []);
}

export default usePopularmovies;