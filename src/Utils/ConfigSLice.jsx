import { createSlice } from "@reduxjs/toolkit";

const ConfigSLice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const {changeLanguage} = ConfigSLice.actions;

export default ConfigSLice.reducer;

