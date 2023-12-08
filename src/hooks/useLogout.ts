import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser, setUserGender, setUserPhone } from "../reducers/userReducer";
import { setCartItems, setSelectedCartItems } from "../reducers/cartReducer";
import { setProducts } from "../reducers/productReducer";

export const useLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    AsyncStorage.clear();
    dispatch(setUser(null));
    dispatch(setUserPhone(null));
    dispatch(setUserGender(null));
    dispatch(setCartItems([]));
    dispatch(setProducts([]));
  };

  return handleLogout;
};
