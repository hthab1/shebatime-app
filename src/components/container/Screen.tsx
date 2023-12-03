import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Dimensions,
} from "react-native";
import React, { ReactNode, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContainerWidth } from "../../utils/consts";
import Color from "../../config/Colors";

const { height } = Dimensions.get("window");
export const statusBarHeight =
  Platform.OS === "android" ? StatusBar.currentHeight : height >= 812 ? 44 : 20;

interface ScreenProps extends ScrollViewProps {
  scroll?: boolean;
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  showsVerticalScrollIndicator?: boolean;
  keyboardShouldPersistTaps?: boolean | "always" | "never" | "handled";
  safeArea?: boolean;
  visible?: boolean;
  keyboardVerticalOffset?: number;
  screenStyle?: StyleProp<ViewStyle>;
  screenColor?: string;
  safeAreaPadding?: boolean;
}

export default function Screen({
  scroll = false,
  children,
  contentContainerStyle,
  header,
  footer,
  showsVerticalScrollIndicator = false,
  keyboardShouldPersistTaps = "handled",
  safeArea,
  visible = true,
  keyboardVerticalOffset,
  screenStyle,
  screenColor,
  safeAreaPadding = true,
  ...rest
}: ScreenProps) {
  let content: JSX.Element;

  switch (scroll) {
    case true:
      content = (
        <View style={styles.content}>
          {header}
          {visible && (
            <ScrollView
              {...rest}
              contentContainerStyle={[
                styles.scrollContentContainer,
                contentContainerStyle,
              ]}
              showsVerticalScrollIndicator={showsVerticalScrollIndicator}
              keyboardShouldPersistTaps={keyboardShouldPersistTaps}
            >
              {children}
            </ScrollView>
          )}
          {footer}
        </View>
      );
      break;
    default:
      content = (
        <View style={styles.content}>
          {header}
          {visible && (
            <View style={[styles.contentContainer, contentContainerStyle]}>
              {children}
            </View>
          )}
          {footer}
        </View>
      );
      break;
  }

  let keyboardAvoidingContent = (
    <>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingViewContainer}
          behavior={"padding"}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          {content}
        </KeyboardAvoidingView>
      ) : (
        <KeyboardAvoidingView style={styles.keyboardAvoidingViewContainer}>
          {content}
        </KeyboardAvoidingView>
      )}
    </>
  );

  return (
    <View
      style={[
        styles.container,
        screenStyle,
        { backgroundColor: screenColor || Color.white },
      ]}
    >
      <StatusBar translucent />
      {safeArea ? (
        <SafeAreaView style={styles.safeAreaViewContainer}>
          {keyboardAvoidingContent}
        </SafeAreaView>
      ) : (
        <View
          style={[
            styles.safeAreaViewContainer,
            safeAreaPadding && styles.noSafeArea,
          ]}
        >
          {keyboardAvoidingContent}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Color.white,
  },
  safeAreaViewContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flex: 1,
    paddingBottom: 0,
    paddingTop: 0,
  },
  keyboardAvoidingViewContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  contentContainer: {
    width: ContainerWidth,
    flex: 1,
  },
  scrollContentContainer: {
    width: ContainerWidth,
    flexGrow: 1,
  },
  noSafeArea: {
    marginTop: statusBarHeight,
  },
});
