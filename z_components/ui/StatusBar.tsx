import React from "react";
import { StatusBar, Platform } from "react-native";

const LightStatusBar = () => {
  return (
    <StatusBar
      translucent
      barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      hidden={false}
      backgroundColor={Platform.OS === "ios" ? "#ffffff" : "rgba(0,0,0,0.2)"}
    />
  );
};

export default LightStatusBar;
