import React from "react";
import { StatusBar } from "react-native";

const LightStatusBar = () => {
  return (
    <StatusBar
      barStyle="light-content"
      hidden={false}
      backgroundColor="#ffffff"
      translucent={true}
    />
  );
};

export default LightStatusBar;
