import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import React from "react";
import { ThankYouModalProps } from "../../declarations/modal";
import { useDispatch, useSelector } from "react-redux";
import useCustomNavigation from "../../hooks/useCustomNavigation";
import { setGlobalLoading } from "../../reducers/modalReducer";
import { RootState } from "../../app/store";
import Color from "../../config/Colors";
import { ContainerWidth, ScreenHeight } from "../../utils/consts";

export default function GlobalLoadingModal({}: ThankYouModalProps) {
  const dispatch = useDispatch();
  const navigate = useCustomNavigation();
  const { globalLoading } = useSelector((state: RootState) => state.modal);

  const OnClose = () => {
    dispatch(setGlobalLoading(false));
    setTimeout(() => {
      navigate.HomeScreen();
    }, 10);
  };

  return (
    <Modal
      animationType="none"
      visible={globalLoading}
      onRequestClose={OnClose}
      transparent={true}
    >
      <View style={styles.container}>
        <ActivityIndicator size={40} color={Color.white} />
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
