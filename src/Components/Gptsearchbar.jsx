import React, { useRef, useState } from "react";
import lang from "../Utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import { chatSession } from "../Utils/AiMode";
import { options } from "../Utils/Constants";
import { addGeminiMovieReults } from "../Utils/gptSlice";
import loader from "../images/loader.gif"

const Gptsearchbar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Search movie in TMDB
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const query = searchText.current.value;
      console.log(query); // Logs the search query (e.g., "indian funny movies")

      // Make an API call to Gemini to get the movies
      const apiQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        query +
        ". only give me names of 8 movies, comma-separated like the example given ahead. Example movies(always give result like this only): Gadar, Sholay, Don, Golmal, DDLJ";

      const result = await chatSession.sendMessage(apiQuery);
      const data = JSON.parse(result.response.text());

      console.log("API Response:", data);

      // Dynamically access the key based on the formatted query
      const movieList = data.recomended_movies || data.Recomended_movies; // Access the array dynamically using the formatted query as the key
      const movieListArray = movieList.split(",");
      
      // Search each movie in TMDB API
      const PromiseMovieDataArray = movieListArray.map((movie) =>
        searchMovieTmdb(movie)
      );
      const tmdbResults = await Promise.all(PromiseMovieDataArray);

      dispatch(
        addGeminiMovieReults({ moviename: movieListArray, movieresults: tmdbResults })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="pt-[15%] md:pt-[10%] flex justify-center relative">
      <form
        className="w-full mx-2 md:w-[69%] md:mx-0 bg-black rounded-lg mt-16 md:mt-20 flex justify-between items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 w-[80%] md:w-full rounded-lg text-sm sm:text-base"
          placeholder={lang[langkey].gptserachplaceholder}
        />
        <button
          className="bg-red-700 text-white rounded-lg m-3 p-3 md:p-4 md:ml-3"
          onClick={handleGptSearchClick}
          disabled={isLoading} // Disable button when loading
        >
          {lang[langkey].search}
        </button>
      </form>

      {/* Absolute loading bar */}
      {isLoading && (
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="w-3/4 h-2 absolute top-[150%] md:top-[90%]">
           
              <img src={loader} width={120} className="absolute left-[25%] md:left-[40%]" alt="loading" />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Gptsearchbar;
