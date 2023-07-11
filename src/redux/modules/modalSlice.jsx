import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalType: "",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalType = action.payload.modalType;
      state.isOpen = true;
      state.value = action.payload.value;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state) => state.modalReducer;

export default modalSlice.reducer;
