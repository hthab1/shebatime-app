import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedSettingScreenParams } from "../declarations/loadedScreenParams";
import { useDispatch, useSelector } from "react-redux";
import useOnLoadScreen from "../hooks/useOnLoadScreen";
import { RootState } from "../app/store";
import CustomText from "../components/text/CustomText";
import { Bottomtabs } from "../config/Tab";

function SettingScreen({ navigation, route }: LoadedSettingScreenParams) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const { appCopy } = useSelector((state: RootState) => state.ui);

  useOnLoadScreen({
    tabVisibility: true,
    tabActive: Bottomtabs.Setting,
  });

  return (
    <Screen safeArea scroll header={<></>}>
      <CustomText>Setting Screen</CustomText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
});

export default SettingScreen;
