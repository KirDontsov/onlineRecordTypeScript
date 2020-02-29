import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { blackColor, passiveColor, activeColor, windowWidth } from "./Vars";

const AppButton = props => (
  <View style={styles.container}>
    <TouchableOpacity
      style={{ ...styles.default, ...props.style }}
      onPress={props.onPress}
      activeOpacity={0.5}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: windowWidth,
    height: 50
  },
  default: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "90%",
    marginHorizontal: "auto",
    color: blackColor,
    backgroundColor: activeColor,
    borderRadius: 6,
    position: "relative"
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase"
  }
});

export default AppButton;
