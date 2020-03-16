import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../../z_components/ui/StatusBar";
import {
  container,
  passiveColor,
  activeColor,
  blackColor,
  whiteColor
} from "../../z_components/ui/Vars";
import Cities from "../../z_components/HomeScreen/Cities";
import { IStyles } from "../../@types/Interfaces";
import LoadAssets from "../../z_components/HOC/LoadAssets";
// import AppButton from "../../z_components/ui/AppButton";

import { iRootState } from "../../store";
import { connect } from "react-redux";

interface HomeScreenProps extends Partial<ReturnType<typeof mapState>> {
  navigation?: any;
}

const assets = [require("../../z_assets/img/bg4.jpg")];

const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  return (
    <SafeAreaView
      style={props.darkTheme ? styles.containerDark : styles.containerLight}
    >
      <LightStatusBar />
      {/* <AppButton
        title="Выбрать специалиста"
        onPress={() => props.navigation.navigate("Record")}
      /> */}
      <LoadAssets {...{ assets }}>
        <LinearGradient
          colors={
            props.darkTheme
              ? [blackColor, activeColor]
              : [activeColor, passiveColor]
          }
          style={styles.gradient}
        >
          <ScrollView>
            <Cities navigation={props.navigation} />
          </ScrollView>
        </LinearGradient>
      </LoadAssets>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<IStyles>({
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
  gradient: {
    flex: 1
  }
});

const mapState = (state: iRootState) => ({
  darkTheme: state.theme.darkTheme
});

export default connect(mapState as any)(HomeScreen);
