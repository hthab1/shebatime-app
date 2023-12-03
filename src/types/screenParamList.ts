import {
  WelcomeScreenParams,
  LoginScreenParams,
  OTPScreenParams,
  HomeScreenParams,
  CartScreenParams,
  CheckoutScreenParams,
  OrdersScreenParams,
  ProductScreenParams,
  SettingScreenParams,
  SplashScreenParams,
} from "../declarations/screenParams";

export type ScreenParamList = {
  SplashScreen: (params?: SplashScreenParams) => void;
  WelcomeScreen: (params?: WelcomeScreenParams) => void;
  LoginScreen: (params?: LoginScreenParams) => void;
  OTPScreen: (params?: OTPScreenParams) => void;
  HomeScreen: (params?: HomeScreenParams) => void;
  ProductScreen: (params?: ProductScreenParams) => void;
  CartScreen: (params?: CartScreenParams) => void;
  CheckoutScreen: (params?: CheckoutScreenParams) => void;
  OrdersScreen: (params?: OrdersScreenParams) => void;
  SettingScreen: (params?: SettingScreenParams) => void;
  navigate: (name: string, params?: { [key: string]: any }) => void;
  goBack: () => void;
};
