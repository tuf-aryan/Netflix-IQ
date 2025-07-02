import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice"; 
import  moviesReducer  from "./moviesSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt:gptReducer,
    config:configReducer,
  },
});
export default appStore;
