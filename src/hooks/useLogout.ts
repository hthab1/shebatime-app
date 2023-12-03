import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserPhone } from "../reducers/userReducer";

export const useLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    AsyncStorage.clear();
    dispatch(setUserPhone(null));
  };

  return handleLogout;
};
