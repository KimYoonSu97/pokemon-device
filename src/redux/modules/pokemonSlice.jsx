import { createAsyncThunk } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { createSlice } from "@reduxjs/toolkit";

// export const __CatchPokemon = createAsyncThunk(
//   "catchPokemon",
//   (payload, thunkAPI) => {
//     setTimeout(() => {
//       thunkAPI.dispatch(catchPokemon(payload));
//     }, 3000);
//   }
// );

const initialState = [];
const pokemonSlice = createSlice({
  name: "pokemonReducer",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      action.payload.map((item) => {
        state.push(item);
      });
    },
    catchPokemon: (state, action) => {
      state.push(action.payload);
    },
    releasePokemon: (state, action) => {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { catchPokemon, setPokemons, releasePokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
