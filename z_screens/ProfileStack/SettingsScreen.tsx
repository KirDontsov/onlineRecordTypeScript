import React from "react";
import { StyleSheet, TextStyle, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../../z_components/ui/StatusBar";
import AppTextTitle from "../../z_components/ui/AppTextTitle";
import {
  passiveColor,
  darkColor,
  container,
  activeColor,
  blackColor
} from "../../z_components/ui/Vars";
import AppText from "../../z_components/ui/AppText";
import { Switch } from "react-native-paper";
import { iRootState, Dispatch } from "../../store";
import { connect } from "react-redux";

interface SettingsScreenProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation?: any;
  searchTerm?: string;
  city?: string;
  data?: any;
  id?: string | number;
}

export interface Styles {
  containerLight?: {};
  containerDark?: {};
  gradient?: {};
  textLight?: TextStyle;
  textDark?: TextStyle;
  switchContainer: {};
}

const SettingsScreen = (props: SettingsScreenProps): JSX.Element => {
  console.log(props);
  return (
    <SafeAreaView
      style={props.darkTheme ? styles.containerDark : styles.containerLight}
    >
      <LightStatusBar />
      <AppTextTitle
        style={props.darkTheme ? styles.textLight : styles.textDark}
      >
        Настройки
      </AppTextTitle>
      <View style={{ ...styles.switchContainer }}>
        <AppText style={props.darkTheme ? styles.textLight : styles.textDark}>
          Тема:
        </AppText>
        <Switch
          value={props.darkTheme}
          onValueChange={() => {
            props.setDarkTheme(!props.darkTheme);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<Styles>({
  containerLight: {
    ...container
  },
  containerDark: {
    ...container,
    backgroundColor: blackColor
  },
  textLight: { color: "#fff" },
  textDark: { color: blackColor },
  switchContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

const mapState = (state: iRootState) => ({
  darkTheme: state.theme.darkTheme
});

const mapDispatch = (dispatch: Dispatch) => ({
  setDarkTheme: dispatch.theme.setDarkTheme
});

export default connect(mapState as any, mapDispatch as any)(SettingsScreen);
