import React from "react";
import { StyleSheet, TextStyle } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "./../../z_components/ui/StatusBar";
import AppTextTitle from "./../../z_components/ui/AppTextTitle";
import AppButton from "./../../z_components/ui/AppButton";
import {
  passiveColor,
  darkColor,
  container
} from "./../../z_components/ui/Vars";
import { IStyles } from "../../@types/Interfaces";

const ProfileScreen = ({ navigation }: any): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      <AppTextTitle style={styles.text}>Профиль</AppTextTitle>

      <AppButton
        title="Настройки"
        onPress={() => navigation.navigate("Settings")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<IStyles>({
  container: {
    ...container,
    backgroundColor: darkColor
  },
  text: { color: passiveColor }
});

export default ProfileScreen;
