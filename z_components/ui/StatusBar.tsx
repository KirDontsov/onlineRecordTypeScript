import React from "react";
import { StatusBar, Platform } from "react-native";
import { connect } from "react-redux";
import { iRootState } from "../../store";
import { blackColor } from "./Vars";

interface StatusBarProps extends Partial<ReturnType<typeof mapState>> {
  navigation?: any;
}

const LightStatusBar = (props: StatusBarProps): JSX.Element => {
  return (
    <StatusBar
      translucent
      barStyle={
        props.darkTheme
          ? Platform.OS === "ios"
            ? "light-content"
            : "dark-content"
          : Platform.OS === "ios"
          ? "dark-content"
          : "light-content"
      }
      hidden={false}
      backgroundColor={
        props.darkTheme
          ? Platform.OS === "ios"
            ? blackColor
            : "rgba(255,255,255,0.1)"
          : Platform.OS === "ios"
          ? "#ffffff"
          : "rgba(0,0,0,0.1)"
      }
    />
  );
};

const mapState = (state: iRootState) => ({
  darkTheme: state.theme.darkTheme
});

export default connect(mapState as any)(LightStatusBar);
