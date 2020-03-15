import React, { ReactElement } from "react";
// import { StyleSheet, TextStyle, View } from "react-native";
// import SafeAreaView from "react-native-safe-area-view";
// import LightStatusBar from "../../z_components/ui/StatusBar";
// import AppTextTitle from "../../z_components/ui/AppTextTitle";
// import AppButton from "../../z_components/ui/AppButton";
// import {
//   passiveColor,
//   darkColor,
//   container,
//   activeColor
// } from "../../z_components/ui/Vars";
// import AppText from "../../z_components/ui/AppText";
// import { Switch } from "react-native-paper";
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

interface ThemeProviderProps {
  children: ReactElement | ReactElement[];
}

const AppThemeProvider = (
  props: SettingsScreenProps,
  { children }: ThemeProviderProps
): JSX.Element => {
  return <>{children}</>;
};

const mapState = (state: iRootState) => ({
  darkTheme: state.theme.darkTheme
});

const mapDispatch = (dispatch: Dispatch) => ({
  setDarkTheme: dispatch.theme.setDarkTheme
});

export default connect(mapState as any, mapDispatch as any)(AppThemeProvider);
