import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../types/loadedData";

interface ProductState {
  products: ProductType[];
  product: ProductType | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
};

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    setProduct: (state, action: PayloadAction<ProductType>) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct, setProducts } = product.actions;

export default product.reducer;
