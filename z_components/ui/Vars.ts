import { Dimensions } from "react-native";

export const activeColor = "#613EEA";

export const passiveColor = "#E8E2FC";

export const darkColor = "#463C6A";

export const blackColor = "#171D33";

export const greaterActiveColor = "#0038A8";

export const windowWidth = Dimensions.get("window").width;

export const windowHeight = Dimensions.get("window").height;

export const container = {
  flex: 1,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  justifyContent: "center",
  backgroundColor: "#fff",
  paddingTop: 100,
  paddingBottom: 100
};
