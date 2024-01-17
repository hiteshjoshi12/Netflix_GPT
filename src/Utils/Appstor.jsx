import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import movieReducer from "./movieSclice"
const Appstore = configureStore({
  reducer: {
    user: UserSlice,
    movies:  movieReducer,
  },
});
export default Appstore;
