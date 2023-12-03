import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedLoginScreenParams } from "../declarations/loadedScreenParams";
import { useDispatch, useSelector } from "react-redux";
import useOnLoadScreen from "../hooks/useOnLoadScreen";
import { RootState } from "../app/store";
import CustomText from "../components/text/CustomText";

function LoginScreen({ navigation, route }: LoadedLoginScreenParams) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const { appCopy } = useSelector((state: RootState) => state.ui);

  useOnLoadScreen({
    tabVisibility: true,
  });

  return (
    <Screen safeArea scroll header={<></>}>
      <CustomText>Login Screen</CustomText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
});

export default LoginScreen;
