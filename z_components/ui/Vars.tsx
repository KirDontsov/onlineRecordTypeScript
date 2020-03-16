import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { IContainer } from "../../@types/Interfaces";
import Constants from "expo-constants";
import { TransitionPresets } from "@react-navigation/stack";
import { BlurView } from "expo-blur";

export const activeColor = "#325efb";

export const passiveColor = "#eef2f4";

export const lightColor = "#9db3ff";

export const darkColor = "#19243b";

export const blackColor = "#171D33";

export const whiteColor = "#fff";

export const disabledColor = "#2d4150";

export const windowWidth = Dimensions.get("window").width;

export const windowHeight = Dimensions.get("window").height;

export const container: IContainer = {
  flex: 1,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  justifyContent: "center",
  backgroundColor: "#fff",
  paddingTop: 82,
  paddingBottom: 100
};

const { height } = Dimensions.get("window");
const φ = (1 + Math.sqrt(5)) / 2;

export const MIN_HEADER_HEIGHT = 64 + Constants.statusBarHeight;
export const MAX_HEADER_HEIGHT = height * (1 - 1 / φ);
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

// config
export const config = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  ...TransitionPresets.SlideFromRightIOS,
  headerTintColor: activeColor,
  headerTransparent: true,
  headerBackground: () => (
    <BlurView tint="light" intensity={5} style={StyleSheet.absoluteFill} />
  )
};
