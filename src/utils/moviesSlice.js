import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    trendingMoives:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrendingMovies:(state,action)=>{
      state.trendingMoives = action.payload;
    }
  },
});

export const { addNowPlayingMovies ,addTrailerVideo,addTrendingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
