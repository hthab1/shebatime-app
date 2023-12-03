import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthenticationNavigator from "./AuthenticationNavigator";
import { Navigators, Screens } from "../config/Screens";
import LoggedInNavigator from "./LoggedInNavigator";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useLoadDataOnStart } from "../hooks/useLoadDataOnStart";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const isLoading = useLoadDataOnStart();
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        <Stack.Screen
          name={Screens.SplashScreen as string}
          component={SplashScreen}
        />
      ) : (
        <>
          {user ? (
            <Stack.Screen
              name={Navigators.LoggedInNavigator as string}
              component={LoggedInNavigator}
            />
          ) : (
            <Stack.Screen
              name={Navigators.AuthenticationNavigator as string}
              component={AuthenticationNavigator}
            />
          )}
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
