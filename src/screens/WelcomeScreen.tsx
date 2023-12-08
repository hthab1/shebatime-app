import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Screen from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedWelcomeScreenParams } from "../declarations/loadedScreenParams";
import { useDispatch, useSelector } from "react-redux";
import useOnLoadScreen from "../hooks/useOnLoadScreen";
import { RootState } from "../app/store";
import CustomText from "../components/text/CustomText";
import Color from "../config/Colors";
import { ScreenHeight } from "../utils/consts";
import useUser from "../hooks/useUser";
import Images from "../config/Images";

function WelcomeScreen({ navigation, route }: LoadedWelcomeScreenParams) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const { selectGender } = useUser();
  const { appCopy } = useSelector((state: RootState) => state.ui);

  const {
    companyNameText,
    feminineChoiceText,
    maculineChoiceText,
    taglineText,
    titleText,
  } = appCopy.WelcomeScreen;

  useOnLoadScreen({
    tabVisibility: true,
  });

  const handleChoose = () => {
    navigate.LoginScreen();
  };

  const onMasculineChoose = () => {
    selectGender("masculine");
    handleChoose();
  };

  const onFeminineChoose = () => {
    selectGender("feminine");
    handleChoose();
  };

  return (
    <Screen
      safeArea
      scroll
      contentContainerStyle={styles.container}
      header={<></>}
    >
      <CustomText large bold marginTop={20}>
        {titleText}
      </CustomText>
      <CustomText xxlarge bold color={Color.primary}>
        {companyNameText}
      </CustomText>
      <CustomText small>{taglineText}</CustomText>
      <View style={styles.choice}>
        <TouchableOpacity onPress={onFeminineChoose} style={styles.card}>
          <Image source={Images.chooseFemaleImage} style={styles.image} />
          <CustomText medium>{feminineChoiceText}</CustomText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onMasculineChoose}
          style={[styles.card, styles.cardMale]}
        >
          <Image source={Images.chooseMaleImage} style={styles.image} />
          <CustomText medium>{maculineChoiceText}</CustomText>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choice: {
    marginTop: ScreenHeight * 0.1,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  card: {
    width: "100%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: Color.teritiary,
    borderRadius: 20,
  },
  cardMale: {
    backgroundColor: Color.quaternary,
  },
});

export default WelcomeScreen;
