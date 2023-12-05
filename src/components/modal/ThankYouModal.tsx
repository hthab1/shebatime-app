import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ThankYouModalProps } from "../../declarations/modal";
import { useDispatch, useSelector } from "react-redux";
import useCustomNavigation from "../../hooks/useCustomNavigation";
import { setThankYouModal } from "../../reducers/modalReducer";
import { RootState } from "../../app/store";
import Color from "../../config/Colors";
import { ContainerWidth, ScreenHeight } from "../../utils/consts";
import CustomText from "../text/CustomText";
import PrimaryButton from "../button/PrimaryButton";
import useCart from "../../hooks/useCart";

export default function ThankYouModal({}: ThankYouModalProps) {
  const dispatch = useDispatch();
  const navigate = useCustomNavigation();
  const { clearSelectedFromCart } = useCart();
  const { thankYouModal } = useSelector((state: RootState) => state.modal);
  const { appCopy } = useSelector((state: RootState) => state.ui);

  const OnClose = () => {
    dispatch(setThankYouModal(false));
    setTimeout(() => {
      navigate.HomeScreen();
      clearSelectedFromCart();
    }, 10);
  };

  const { modalCloseButtonText, modalSubTitleText, modalTitleText } =
    appCopy.CheckoutScreen;
  return (
    <Modal
      animationType="none"
      visible={thankYouModal}
      onRequestClose={OnClose}
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <CustomText bold xlarge lineHeight="xlarge" style={styles.title}>
            {modalTitleText}
          </CustomText>
          <CustomText style={styles.subTitle}>{modalSubTitleText}</CustomText>
          <PrimaryButton
            width={"80%"}
            primary
            onPress={OnClose}
            label={modalCloseButtonText}
            marginTop={50}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.black50,
    alignItems: "center",
    justifyContent: "center",
    height: ScreenHeight,
  },
  content: {
    backgroundColor: Color.teritiary,
    width: ContainerWidth,
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    width: "80%",
    marginTop: 40,
    marginBottom: 10,
  },
  subTitle: {
    textAlign: "center",
    width: "70%",
    marginBottom: 5,
  },
});
