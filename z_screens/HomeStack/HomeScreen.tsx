import React, { FunctionComponent } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../../z_components/ui/StatusBar";
import {
  container,
  passiveColor,
  activeColor
} from "../../z_components/ui/Vars";
import Cities from "../../z_components/HomeScreen/Cities";
import { IStyles } from "../../@types/Interfaces";
import LoadAssets from "../../z_components/HOC/LoadAssets";
// import AppButton from "../../z_components/ui/AppButton";

const assets = [require("../../z_assets/img/bg4.jpg")];

const HomeScreen: FunctionComponent<any> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      {/* <AppButton
        title="Выбрать специалиста"
        onPress={() => props.navigation.navigate("Record")}
      /> */}
      <LoadAssets {...{ assets }}>
        <LinearGradient
          colors={[activeColor, passiveColor]}
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
  container: { ...container, paddingBottom: 0, paddingTop: 0 },
  gradient: {
    flex: 1
  }
});

export default HomeScreen;
