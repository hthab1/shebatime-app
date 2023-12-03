import { ScreenType } from "../types/screens";
import { RouteProp, NavigationProp } from "@react-navigation/native";
import {
  CartScreenParams,
  CheckoutScreenParams,
  HomeScreenParams,
  LoginScreenParams,
  OTPScreenParams,
  OrdersScreenParams,
  ProductScreenParams,
  ScreenParams,
  SettingScreenParams,
  SplashScreenParams,
  WelcomeScreenParams,
} from "./screenParams";

export interface LoadedScreenParams {
  previousScreen?: ScreenType;
  navigation?: NavigationProp<Record<string, object>>;
}

export interface LoadedSplashScreenParams extends LoadedScreenParams {
  route?: RouteProp<Record<string, SplashScreenParams>, string>;
}

export interface LoadedWelcomeScreenParams extends LoadedScreenParams {
  route?: RouteProp<Record<string, WelcomeScreenParams>, string>;
}

export interface LoadedLoginScreenParams extends LoadedScreenParams {
  route?: RouteProp<Record<string, LoginScreenParams>, string>;
}

export interface LoadedOTPScreenParams extends LoadedScreenParams {
  route?: RouteProp<Record<string, OTPScreenParams>, string>;
}

export interface LoadedHomeScreenParams extends LoadedScreenParams {
  route?: RouteProp<Record<string, HomeScreenParams>, string>;
}

export interface LoadedProductScreenParams extends LoadedScreenParams {
  route?: RouteProp<Record<string, ProductScreenParams>, string>;
}

export interface LoadedCartScreenParams extends LoadedScreenParams {
  route?: RouteProp<Record<string, CartScreenParams>, string>;
}

export interface LoadedCheckoutScreenParams extends LoadedScreenParams {
  route?: RouteProp<Record<string, CheckoutScreenParams>, string>;
}

export interface LoadedOrdersScreenParams extends LoadedScreenParams {
  route?: RouteProp<Record<string, OrdersScreenParams>, string>;
}

export interface LoadedSettingScreenParams extends LoadedScreenParams {
  route?: RouteProp<Record<string, SettingScreenParams>, string>;
}
