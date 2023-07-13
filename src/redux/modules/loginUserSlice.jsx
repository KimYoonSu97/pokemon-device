import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 3,
  signId: "test@test.test",
  ninkname: "웅이",
  profileImg:
    "https://i.namu.wiki/i/8hp6dfFKbD-q2Fe01Bm6ll2OEgFsq-q1O2RJ0_ybX67rfIUiLNadOpl3Ej17on3V6VzOqhyv-7HDb-UkTt7UzaVn-i_QFjf7bDgDJ4G5oPLNka4wO-K1P1Bmz3Kpfro4NgjNMxMOVUyagjeyogxrzg.webp",
  signDate: "23 .7 .6",
};

const loginUserSlice = createSlice({
  name: "loginUserReducer",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default loginUserSlice.reducer;
export const { setLoginUser } = loginUserSlice.actions;
