import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const pokemonCatchSlice = createSlice({
  name: "pokemonCatchReducer",
  initialState,
  reducers: {
    setCatchPokemon: (state, action) => {
      return (state = action.payload);
    },
    setDetailPokemon: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setCatchPokemon, setDetailPokemon } = pokemonCatchSlice.actions;

export default pokemonCatchSlice.reducer;
