import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Utils/movieSclice";
import { options } from "../Utils/Constants";
import { useEffect } from "react";

const useUpcomingmovies = () =>{
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        options
      );
  
      const response = await data.json();
     
      dispatch(addUpcomingMovies(response.results))
    };
  
    useEffect(() => {
      getUpcomingMovies();
    }, []);
}

export default useUpcomingmovies;