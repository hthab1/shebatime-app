import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tabType } from "../types/tab";
import { ScreenType } from "../declarations/screen";
import { Screens } from "../config/Screens";
import { AppCopyInterface, MainCopy } from "../copy/AppCopy";
import { CartItemType } from "../types/loadedData";

interface CartState {
  cartItems: CartItemType[];
  selectedCartItems: number[];
}

const initialState: CartState = {
  cartItems: [],
  selectedCartItems: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItemType[]>) => {
      state.cartItems = action.payload;
    },
    setSelectedCartItems: (state, action: PayloadAction<number[]>) => {
      state.selectedCartItems = action.payload;
    },
  },
});

export const { setCartItems, setSelectedCartItems } = cart.actions;

export default cart.reducer;
