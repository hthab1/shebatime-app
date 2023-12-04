import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userReducer";
import { setAppCopy } from "../reducers/uiReducer";
import { MainCopy } from "../copy/AppCopy";
import { loadCachedItem } from "../utils/storage";
import { setCartItems } from "../reducers/cartReducer";

export const useLoadDataOnStart = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = async () => {
    const user = await loadCachedItem("user");
    if (user) {
      dispatch(setUser(user));
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
      await Promise.all([loadUser(), loadCart()]);
      setIsLoading(false);
    };

    loadData();
  }, [dispatch]);

  return isLoading;
};
