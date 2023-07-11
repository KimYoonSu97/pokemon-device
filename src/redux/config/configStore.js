import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../modules/modalSlice";
import pokemonReducer from "../modules/pokemonSlice";
import userReducer from "../modules/userSlice";
import diaryReducer from "../modules/diarySlice";
import pokemonCatchReducer from "../modules/pokemonCatchSlice";

const store = configureStore({
  reducer: {
    modalReducer,
    pokemonReducer,
    userReducer,
    diaryReducer,
    pokemonCatchReducer,
  },
});

export default store;
