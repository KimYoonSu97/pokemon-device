import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const allUserSlice = createSlice({
  name: "allUserReducer",
  initialState,
  reducers: {
    setAllUser: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { setAllUser } = allUserSlice.actions;
export default allUserSlice.reducer;
