import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, setUserGender, setUserPhone } from "../reducers/userReducer";
import { loadCachedItem } from "../utils/storage";
import { setCartItems } from "../reducers/cartReducer";
import { UserGenderType } from "../types/loadedData";

export const useLoadDataOnStart = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = async () => {
    const user = await loadCachedItem("user");
    if (user) {
      dispatch(setUser(user));
    }
  };

  const loadUserPhone = async () => {
    const phone = await loadCachedItem("phone");
    if (phone) {
      dispatch(setUserPhone(phone));
    }
  };

  const loadUserGender = async () => {
    const gender = await loadCachedItem("gender");
    if (gender) {
      dispatch(setUserGender(gender as UserGenderType));
    }
  };

  const loadCart = async () => {
    const cart = await loadCachedItem("cart");
    if (cart) {
      dispatch(setCartItems(JSON.parse(cart)));
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([
        loadUser(),
        loadCart(),
        loadUserPhone(),
        loadUserGender(),
      ]);
      setIsLoading(false);
    };

    loadData();
  }, [dispatch]);

  return isLoading;
};
