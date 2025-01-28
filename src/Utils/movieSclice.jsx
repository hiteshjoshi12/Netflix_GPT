import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        popularmovies : null,
        topratedmovies : null,
        upcomingmovies :null,
        trailerVideo:null,
    },
    reducers: {
        addNowPlayingMovies: (state , action) =>{
            state.nowPlayingMovies =action.payload;
        },
        addPopularMovies: (state , action) =>{
            state.popularmovies =action.payload;
        },
        addTopRatedMovies: (state , action) =>{
            state.topratedmovies =action.payload;
        },
        addUpcomingMovies: (state , action) =>{
            state.upcomingmovies =action.payload;
        },
        addTrailerVideo: (state , action) =>{
            state.trailerVideo =action.payload;
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies , addTopRatedMovies, addUpcomingMovies , addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;