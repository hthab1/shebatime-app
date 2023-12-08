import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import uiReducer from "../reducers/uiReducer";
import userReducer from "../reducers/userReducer";
import cartReducer from "../reducers/cartReducer";
import modalReducer from "../reducers/modalReducer";
import productReducer from "../reducers/productReducer";
import orderReducer from "../reducers/orderReducer";
import reloadReducer from "../reducers/reloadReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  cart: cartReducer,
  modal: modalReducer,
  product: productReducer,
  order: orderReducer,
  reload: reloadReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
