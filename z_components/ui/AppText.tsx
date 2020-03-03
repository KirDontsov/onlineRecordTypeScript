import React from "react";
import { Text, StyleSheet } from "react-native";
import { blackColor } from "./Vars";

export interface IProps {
  style?: object;
  children: string | object;
}

const AppText = (props: IProps) => (
  <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontSize: 15,
    lineHeight: 28,
    color: blackColor,
    paddingHorizontal: "5%"
  }
});

export default AppText;
