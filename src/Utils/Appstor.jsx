import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import movieReducer from "./movieSclice"
import gptReducer from "./gptSlice"
const Appstore = configureStore({
  reducer: {
    user: UserSlice,
    movies:  movieReducer,
    gpt: gptReducer,
  },
});
export default Appstore;
