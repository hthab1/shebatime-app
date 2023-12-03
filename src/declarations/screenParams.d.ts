import { ScreenType } from "../types/screens";
import { RouteProp, NavigationProp } from "@react-navigation/native";
import { LoadedUserData } from "./loadedData";
import { LoadedAiConversation } from "./aiServices";
import { IdType } from "./services";

export interface ScreenParams {
  previousScreen?: ScreenType;
}

export interface SplashScreenParams extends ScreenParams {}

export interface WelcomeScreenParams extends ScreenParams {}

export interface LoginScreenParams extends ScreenParams {}

export interface OTPScreenParams extends ScreenParams {
  phone?: string;
}

export interface HomeScreenParams extends ScreenParams {}

export interface ProductScreenParams extends ScreenParams {}

export interface CartScreenParams extends ScreenParams {}

export interface CheckoutScreenParams extends ScreenParams {}

export interface OrdersScreenParams extends ScreenParams {}

export interface SettingScreenParams extends ScreenParams {}
