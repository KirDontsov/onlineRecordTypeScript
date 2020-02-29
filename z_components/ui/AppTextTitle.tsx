import React from "react";
import { Text, StyleSheet } from "react-native";
import { blackColor } from "./Vars";

const AppTextTitle = props => {
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
