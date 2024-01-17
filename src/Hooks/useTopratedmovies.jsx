import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSclice";
import { options } from "../Utils/Constants";
import { useEffect } from "react";

const useTopratedmovies = () =>{
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        options
      );
  
      const response = await data.json();
     
      dispatch(addTopRatedMovies(response.results))
    };
  
    useEffect(() => {
      getTopRatedMovies();
    }, []);
}

export default useTopratedmovies;