import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSclice";
import { options } from "../Utils/Constants";
import { useEffect } from "react";

const useNowplayingmovies = () =>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        options
      );
  
      const response = await data.json();
      console.log(response);
     
      dispatch(addNowPlayingMovies(response.results))
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowplayingmovies;