import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userReducer";
import { setAppCopy } from "../reducers/uiReducer";
import { MainCopy } from "../copy/AppCopy";
import { loadCachedItem } from "../utils/storage";

export const useLoadDataOnStart = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = async () => {
    const user = await loadCachedItem("user");
    if (user) {
      dispatch(setUser(user));
      // dispatch(setUser(JSON.parse(user)));
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([loadUser()]);
      setIsLoading(false);
    };

    loadData();
  }, [dispatch]);

  return isLoading;
};
