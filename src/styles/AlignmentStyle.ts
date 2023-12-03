import { StyleSheet } from "react-native";

const AlignmentStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexCol: {
    flex: 1,
    flexDirection: "column",
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  textAlign: {
    textAlign: "center",
  },
});

export default AlignmentStyles;
