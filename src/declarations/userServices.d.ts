import { UserType } from "../types/loadedData";
import { GetReturnType, LoadingProps } from "./commonServices";

export interface SendOTPProps {
  phone: string;
}
export interface VerifyOTPProps {
  phone: string;
  code: string;
  gender?: string;
}
export interface UpdateUserProps {
  gender: string;
}

export interface SendOTPProps extends SendOTPSubmitProps, LoadingProps {}
export interface VerifyOTPProps extends VerifyOTPSubmitProps, LoadingProps {}
export interface UpdateUserProps extends UpdateUserSubmitProps, LoadingProps {}
export interface DeleteUserProps extends LoadingProps {}

export interface SendOTPReturnType extends GetReturnType {}
export interface VerifyOTPReturnType extends GetReturnType {
  user: UserType;
  token: string;
}
export interface UpdateUserReturnType extends GetReturnType {
  user: UserType;
}
export interface DeleteUserReturnType extends GetReturnType {}
