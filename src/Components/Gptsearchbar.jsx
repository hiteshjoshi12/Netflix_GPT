import React, { useRef } from "react";
import lang from "../Utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import { chatSession } from "../Utils/AiMode";
import { options } from "../Utils/Constants";
import { addGeminiMovieReults } from "../Utils/gptSlice";

const Gptsearchbar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie in tmdb
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
    const query = searchText.current.value;
    console.log(query); // Logs the search query (e.g., "indian funny movies")

    // Make an API call to Gemini to get the movies
    const apiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      query +
      ". only give me names of 8 movies, comma-separated like the example given ahead. Example result: Gadar, Sholay, Don, Golmal, DDLJ";

    const result = await chatSession.sendMessage(apiQuery);
    const data = JSON.parse(result.response.text());

    console.log("API Response:", data);
    
    // Convert spaces to underscores in the search query to match the API response key format
    const formattedQuery = query.replace(/\s+/g, "_"); // Replace spaces with underscores
    
    // Dynamically access the key based on the formatted query
    const movieList = data[formattedQuery]; // Access the array dynamically using the formatted query as the key

    // Search each movie in TMDB API
    const PromiseMovieDataArray = movieList.map((movie) =>
      searchMovieTmdb(movie)
    );
    const tmdbResults = await Promise.all(PromiseMovieDataArray);
    dispatch(
      addGeminiMovieReults({ moviename: movieList, movieresults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-full sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-1/2 bg-black grid grid-cols-12 rounded-lg mt-8 sm:mt-12 md:mt-16 lg:mt-20"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg text-sm sm:text-base"
          placeholder={lang[langkey].gptserachplaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 bg-red-700 text-white rounded-lg text-sm sm:text-base"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
