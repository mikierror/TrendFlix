import { createSlice } from "@reduxjs/toolkit";

const TvSlice = createSlice({
  name: "tv", 
  initialState: {
    info: null, 
  },
  reducers: {
    loadtv: (state, action) => {
      state.info = action.payload; 
    },
    removetv: (state) => {
      state.info = null; 
    },
  },
});

export const { loadtv, removetv } = TvSlice.actions;

export default TvSlice.reducer;
