import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import { Screens } from "../config/Screens";
import LoginScreen from "../screens/LoginScreen";
import OTPScreen from "../screens/OTPScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Screens.WelcomeScreen as string}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name={Screens.LoginScreen as string}
        component={LoginScreen}
      />
      <Stack.Screen name={Screens.OTPScreen as string} component={OTPScreen} />
      <Stack.Screen
        name={Screens.SplashScreen as string}
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
