import React from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "./../../z_components/ui/StatusBar";
import AppTextTitle from "./../../z_components/ui/AppTextTitle";
import AppButton from "./../../z_components/ui/AppButton";
import {
  container,
  blackColor,
  whiteColor
} from "./../../z_components/ui/Vars";
import { IStyles } from "../../@types/Interfaces";
import { iRootState } from "../../store";
import { connect } from "react-redux";

interface Styles extends IStyles {
  textLight: {};
  textDark: {};
}

interface ProfileScreenProps extends Partial<ReturnType<typeof mapState>> {
  navigation?: any;
}

const ProfileScreen = (props: ProfileScreenProps): JSX.Element => {
  return (
    <SafeAreaView
      style={props.darkTheme ? styles.containerDark : styles.containerLight}
    >
      <LightStatusBar />
      <AppTextTitle
        style={props.darkTheme ? styles.textDark : styles.textLight}
      >
        Профиль
      </AppTextTitle>

      <AppButton
        title="Настройки"
        onPress={() => props.navigation.navigate("Settings")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<Styles>({
  containerLight: {
    ...container,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: whiteColor
  },
  containerDark: {
    ...container,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: blackColor
  },
  textLight: { color: blackColor },
  textDark: { color: whiteColor }
});

const mapState = (state: iRootState) => ({
  darkTheme: state.theme.darkTheme
});

export default connect(mapState as any)(ProfileScreen);
