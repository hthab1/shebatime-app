import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderType } from "../types/loadedData";

interface OrderState {
  orders: OrderType[];
  order: OrderType | null;
}

const initialState: OrderState = {
  orders: [],
  order: null,
};

export const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<OrderType[]>) => {
      state.orders = action.payload;
    },
    setOrder: (state, action: PayloadAction<OrderType>) => {
      state.order = action.payload;
    },
  },
});

export const { setOrder, setOrders } = order.actions;

export default order.reducer;
