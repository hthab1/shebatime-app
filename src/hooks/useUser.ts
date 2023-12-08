import { useDispatch, useSelector } from "react-redux";
import { cacheItem } from "../utils/storage";
import { UserGenderType } from "../types/loadedData";
import {
  setToken,
  setUser,
  setUserGender,
  setUserPhone,
} from "../reducers/userReducer";
import {
  DeleteUser,
  SendOTP,
  UpdateUser,
  VerifyOTP,
} from "../api/services/user";
import {
  DeleteUserProps,
  SendOTPProps,
  UpdateUserProps,
  VerifyOTPProps,
} from "../declarations/userServices";
import { RootState } from "../app/store";
import { formatPhoneNumber } from "../function/text";
import { useLogout } from "./useLogout";
import { useEffect } from "react";
import { setGlobalLoading } from "../reducers/modalReducer";
import { setProductsReload } from "../reducers/reloadReducer";

export default function useUser() {
  const dispatch = useDispatch();
  const logout = useLogout();
  const { userGender, userPhone } = useSelector(
    (state: RootState) => state.user
  );

  const selectGender = (gender: UserGenderType) => {
    dispatch(setUserGender(gender));
    cacheItem("gender", gender);
  };

  const sendOTP = async ({
    phone,
    setLoading,
  }: SendOTPProps): Promise<boolean> => {
    const response = await SendOTP({
      phone: formatPhoneNumber(phone || userPhone),
      setLoading,
    });
    const { message, status } = response;

    if (status === 200) return true;
    return false;
  };

  const verifyOTP = async ({
    phone,
    setLoading,
    code,
  }: VerifyOTPProps): Promise<boolean> => {
    const response = await VerifyOTP({
      phone: formatPhoneNumber(phone || userPhone),
      setLoading,
      code,
      gender: userGender === "masculine" ? "male" : "female",
    });
    const { message, status, user, token } = response;

    if (status === (200 || 201) && user) {
      dispatch(setUser(user));
      dispatch(setToken(token));
      dispatch(setUserPhone(phone));
      cacheItem("user", JSON.stringify(user));
      cacheItem("token", token);
      cacheItem("phone", phone);
      return true;
    } else {
      return false;
    }
  };

  const updateUser = async ({
    gender,
    setLoading,
  }: UpdateUserProps): Promise<boolean> => {
    const productTypeUpdate = userGender === "masculine" ? "male" : "female";
    if (productTypeUpdate === gender) return false;
    dispatch(setGlobalLoading(true));
    const response = await UpdateUser({
      setLoading,
      gender: gender,
    });
    const { message, status, user } = response;

    dispatch(setGlobalLoading(false));
    if (status === (200 || 201) && user) {
      dispatch(setProductsReload(true));
      dispatch(setUser(user));
      cacheItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  const deleteUser = async ({
    setLoading,
  }: DeleteUserProps): Promise<boolean> => {
    dispatch(setGlobalLoading(true));
    const response = await DeleteUser({
      setLoading,
    });
    dispatch(setGlobalLoading(false));
    const { message, status } = response;

    if (status === 200 || 201) {
      logout();
      return true;
    } else {
      return false;
    }
  };

  return {
    selectGender,
    sendOTP,
    verifyOTP,
    updateUser,
    deleteUser,
  };
}
