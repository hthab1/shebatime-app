import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import uiReducer from "../reducers/uiReducer";
import userReducer from "../reducers/userReducer";
import cartReducer from "../reducers/cartReducer";
import modalReducer from "../reducers/modalReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  cart: cartReducer,
  modal: modalReducer,
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
