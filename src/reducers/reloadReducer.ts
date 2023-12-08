import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReloadState {
  productsReload: boolean;
  ordersReload: boolean;
}

const initialState: ReloadState = {
  productsReload: false,
  ordersReload: false,
};

export const reload = createSlice({
  name: "reload",
  initialState,
  reducers: {
    setProductsReload: (state, action: PayloadAction<boolean>) => {
      state.productsReload = action.payload;
    },
    setOrdersReload: (state, action: PayloadAction<boolean>) => {
      state.ordersReload = action.payload;
    },
  },
});

export const { setProductsReload, setOrdersReload } = reload.actions;

export default reload.reducer;
