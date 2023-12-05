import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  thankYouModal: boolean;
}

const initialState: ModalState = {
  thankYouModal: false,
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setThankYouModal: (state, action: PayloadAction<boolean>) => {
      state.thankYouModal = action.payload;
    },
  },
});

export const { setThankYouModal } = modal.actions;

export default modal.reducer;
