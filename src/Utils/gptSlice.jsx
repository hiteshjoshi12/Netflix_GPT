import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieresults: null,
    moviename: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGeminiMovieReults: (state, action) => {
      const { moviename, movieresults } = action.payload;
      state.moviename = moviename;
      state.movieresults = movieresults;
    },
  },
});

export const { toggleGptSearchView, addGeminiMovieReults } = gptSlice.actions;

export default gptSlice.reducer;
