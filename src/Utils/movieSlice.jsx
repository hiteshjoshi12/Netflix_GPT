import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularmovies: null,
    topratedmovies: null,
    upcomingmovies: null,
    trailerVideo: null,
    indianTvShows: null,
    internationalTvShows: null,
    bollywoodMovies: null,
    hollywoodMovies: null,
    actionThrillerMovies: null,
    romanticMovies: null,
    indianComedyMovies: null,
    adventureMovies: null,
    animationMovies: null,
    latestReleases: null

  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularmovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topratedmovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingmovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addIndianTvShows: (state, action) => {
      state.indianTvShows = action.payload;
    },
    addInternationalTvShows: (state, action) => {
      state.internationalTvShows = action.payload;
    },
    addBollywoodMovies: (state, action) => {
      state.bollywoodMovies = action.payload;
    },
    addHollywoodMovies: (state, action) => {
      state.hollywoodMovies = action.payload;
    },
    addActionThrillerMovies: (state, action) => {
      state.actionThrillerMovies = action.payload;
    },
    addRomanticMovies: (state, action) => {
      state.romanticMovies = action.payload;
    },
    addIndianComedyMovies: (state, action) => {
      state.indianComedyMovies = action.payload;
    },
    addAdventureMovies: (state, action) => {
      state.adventureMovies = action.payload;
    },
    addAnimationMovies: (state, action) => {
      state.animationMovies = action.payload;
    },
    addLatestReleases: (state, action) => {
      state.latestReleases = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideo,
  addIndianTvShows,
  addInternationalTvShows,
  addBollywoodMovies,
  addHollywoodMovies,
  addActionThrillerMovies,
  addRomanticMovies,
  addIndianComedyMovies,
  addAdventureMovies,
  addAnimationMovies,
  addLatestReleases 
} = movieSlice.actions;
export default movieSlice.reducer;
