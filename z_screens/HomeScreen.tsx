import React, { FunctionComponent } from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { connect } from "react-redux";
import { RematchDispatch, RematchRootState } from "@rematch/core";
import { models, select } from "../store";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../z_components/ui/StatusBar";
import { container } from "../z_components/ui/Vars";
import Cities from "../z_components/Cities";

interface HomeProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {}

const HomeScreen: FunctionComponent<HomeProps> = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <LightStatusBar />
        <Cities />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { ...container, paddingBottom: 0 }
});

const mapState = (state: RematchRootState<models>) => ({
  textInput: state.city.textInput
});

const mapDispatch = (dispatch: RematchDispatch<models>) => ({
  incrementMyTestReducer: () => dispatch.city.setTextInput()
});

export default connect(mapState as any, mapDispatch as any)(HomeScreen);
