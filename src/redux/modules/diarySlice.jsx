import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const diarySlice = createSlice({
  name: "diaryReducer",
  initialState,
  reducers: {
    setDiary: (state, action) => {
      return [...action.payload];
    },
    addDiary: (state, action) => {
      return [...state, action.payload];
    },
    deleteDiary: (state, action) => {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
    updateDiary: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          return (item.text = action.payload.text);
        } else {
          return item;
        }
      });
    },
  },
});

export const { setDiary, addDiary, deleteDiary, updateDiary } =
  diarySlice.actions;
export default diarySlice.reducer;
