import { AxiosResponse } from "axios";
import { Requests } from "../../config/api";
import { postRequest } from "../commonActions/post";
import {
  DeleteUserProps,
  DeleteUserReturnType,
  SendOTPProps,
  SendOTPReturnType,
  UpdateUserProps,
  UpdateUserReturnType,
  VerifyOTPProps,
  VerifyOTPReturnType,
} from "../../declarations/userServices";
import { patchRequest } from "../commonActions/update";
import { deleteRequest } from "../commonActions/delete";

export const SendOTP = async ({
  phone,
  setLoading,
}: SendOTPProps): Promise<SendOTPReturnType> => {
  try {
    setLoading && setLoading(true);
    const response: AxiosResponse = await postRequest({
      route: Requests.post.sendOtp,
      payload: { phone },
    });
    setLoading && setLoading(false);

    const status = response?.status;
    const message = response?.data?.msg;

    return {
      status: status,
      message: message,
    };
  } catch (error) {
    setLoading && setLoading(false);
    throw error;
  }
};

export const VerifyOTP = async ({
  phone,
  setLoading,
  code,
  gender,
}: VerifyOTPProps): Promise<VerifyOTPReturnType> => {
  try {
    setLoading && setLoading(true);
    const response: AxiosResponse = await postRequest({
      route: Requests.post.verifyOtp,
      payload: { phone, code, gender },
    });
    setLoading && setLoading(false);

    const status = response?.status;
    const user = response?.data?.customer;
    const token = response?.data?.token;
    const message = response?.data?.msg;

    return {
      status: status,
      user,
      token,
      message: message,
    };
  } catch (error) {
    setLoading && setLoading(false);
    throw error;
  }
};

export const UpdateUser = async ({
  setLoading,
  gender,
}: UpdateUserProps): Promise<UpdateUserReturnType> => {
  try {
    setLoading && setLoading(true);
    const response: AxiosResponse = await patchRequest({
      route: Requests.update.updateUser,
      payload: { gender },
    });
    setLoading && setLoading(false);

    const status = response?.status;
    const user = response?.data?.customer;
    const message = response?.data?.msg;

    return {
      status: status,
      user,
      message: message,
    };
  } catch (error) {
    setLoading && setLoading(false);
    throw error;
  }
};

export const DeleteUser = async ({
  setLoading,
}: DeleteUserProps): Promise<DeleteUserReturnType> => {
  try {
    setLoading && setLoading(true);
    const response: AxiosResponse = await deleteRequest({
      route: Requests.delete.deleteUser,
    });
    setLoading && setLoading(false);

    const status = response?.status;
    const message = response?.data?.msg;

    return {
      status: status,
      message: message,
    };
  } catch (error) {
    setLoading && setLoading(false);
    throw error;
  }
};
