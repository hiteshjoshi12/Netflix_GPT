import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
const Appstore = configureStore({
  reducer: {
    user: UserSlice,
  },
});
export default Appstore;
