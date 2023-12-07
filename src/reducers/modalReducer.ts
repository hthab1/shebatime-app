import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  thankYouModal: boolean;
  globalLoading: boolean;
}

const initialState: ModalState = {
  thankYouModal: false,
  globalLoading: false,
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setThankYouModal: (state, action: PayloadAction<boolean>) => {
      state.thankYouModal = action.payload;
    },
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.globalLoading = action.payload;
    },
  },
});

export const { setThankYouModal, setGlobalLoading } = modal.actions;

export default modal.reducer;
