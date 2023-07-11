import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  signID: "",
  nickname: "",
  profileImg: "",
  signDat: "",
};

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
