import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../modules/modalSlice";
import pokemonReducer from "../modules/pokemonSlice";
import userReducer from "../modules/userSlice";
import diaryReducer from "../modules/diarySlice";
import pokemonCatchReducer from "../modules/pokemonCatchSlice";
import allUserReducer from "../modules/allUserSlice";
import loginUserReducer from "../modules/loginUserSlice";

const store = configureStore({
  reducer: {
    modalReducer,
    pokemonReducer,
    userReducer,
    diaryReducer,
    pokemonCatchReducer,
    allUserReducer,
    loginUserReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
