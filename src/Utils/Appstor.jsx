import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import movieReducer from "./movieSclice"
import gptReducer from "./gptSlice"
import Configreducer from "./ConfigSLice";
const Appstore = configureStore({
  reducer: {
    user: UserSlice,
    movies:  movieReducer,
    gpt: gptReducer,
    config: Configreducer
  },
});
export default Appstore;
