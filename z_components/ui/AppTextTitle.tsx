import React from "react";
import { Text, StyleSheet } from "react-native";
import { blackColor } from "./Vars";

export interface IProps {
  style?: object;
  children: string | object;
}

const AppTextTitle = (props: IProps) => {
  return (
    <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 40,
    paddingHorizontal: "5%",
    lineHeight: 55,
    color: blackColor
  }
});

export default AppTextTitle;
