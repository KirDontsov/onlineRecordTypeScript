import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";

import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../../z_components/ui/StatusBar";
import { container } from "../../z_components/ui/Vars";
import Cities from "../../z_components/Cities";
import { IStyles } from "../../@types/Interfaces";

const HomeScreen: FunctionComponent<any> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      <Cities navigation={props.navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<IStyles>({
  container: { ...container, paddingBottom: 0 }
});

export default HomeScreen;
