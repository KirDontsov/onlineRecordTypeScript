import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import {
  activeColor,
  container,
  blackColor,
  whiteColor,
  passiveColor
} from "../ui/Vars";
import { IStyles } from "../../@types/Interfaces";
import { iRootState } from "../../store";
import { connect } from "react-redux";

interface LoaderProps extends Partial<ReturnType<typeof mapState>> {
  navigation?: any;
}

const Loader = (props: LoaderProps) => (
  <View style={props.darkTheme ? styles.containerDark : styles.containerLight}>
    <ActivityIndicator
      animating={true}
      color={props.darkTheme ? activeColor : passiveColor}
      size={"large"}
    />
  </View>
);

const styles = StyleSheet.create<IStyles>({
  containerLight: { ...container, backgroundColor: whiteColor },
  containerDark: { ...container, backgroundColor: blackColor }
});

const mapState = (state: iRootState) => ({
  darkTheme: state.theme.darkTheme
});

export default connect(mapState as any)(Loader);
