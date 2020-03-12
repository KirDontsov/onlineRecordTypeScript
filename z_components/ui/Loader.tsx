import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { activeColor, container } from "../ui/Vars";
import { IStyles } from "../../@types/Interfaces";

const Loader = () => (
  <View style={[styles.container]}>
    <ActivityIndicator
      // style={{
      //   flex: 1,
      //   paddingVertical: "50%"
      // }}
      animating={true}
      color={activeColor}
      size={"large"}
    />
  </View>
);

const styles = StyleSheet.create<IStyles>({
  container: { ...container }
});

export default Loader;
