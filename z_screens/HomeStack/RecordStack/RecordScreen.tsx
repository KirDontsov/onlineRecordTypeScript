import React, { Component } from "react";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../../store";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../../../z_components/ui/StatusBar";
import AppTextTitle from "../../../z_components/ui/AppTextTitle";
import AppText from "../../../z_components/ui/AppText";
import { container } from "../../../z_components/ui/Vars";
import { IStyles } from "../../../@types/Interfaces";

import AppButton from "../../../z_components/ui/AppButton";

interface QuizProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation?: any;
  searchTerm?: string;
  city?: string;
  data?: any;
  id?: string | number;
}

class RecordScreen extends Component<QuizProps> {
  nextSpecialist() {
    this.props.navigation.navigate("FirstScreen");
    this.props.setStep(1);
  }
  nextServices() {
    this.props.navigation.navigate("SecondScreen");
    this.props.setStep(2);
  }
  nextTime() {
    this.props.navigation.navigate("ThirdScreen");
    this.props.setStep(3);
  }

  render() {
    // const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <LightStatusBar />
        <AppText>Бассейн:</AppText>
        <AppTextTitle> {this.props.chosenFilial}</AppTextTitle>

        <AppButton
          title="Выбрать специалиста"
          onPress={() => this.nextSpecialist()}
        />
        <AppButton title="Выбрать услугу" onPress={() => this.nextServices()} />
        <AppButton title="Выбрать время" onPress={() => this.nextTime()} />
        <AppText>Вы выбрали:</AppText>
        <AppText>{this.props.chosenCity}</AppText>
        <AppText>{this.props.chosenFilial}</AppText>
        <AppText>{this.props.chosenSpecialist}</AppText>
        <AppText>{this.props.date}</AppText>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create<IStyles>({
  container: { ...container }
});

const mapState = (state: iRootState) => ({
  step: state.quiz.step,
  item: state.quiz.item,
  specialists: state.quiz.specialists,
  chosenSpecialist: state.quiz.chosenSpecialist,
  service: state.quiz.service,
  date: state.quiz.date,
  chosenFilial: state.map.chosenFilial,
  chosenCity: state.city.chosenCity
});

const mapDispatch = (dispatch: Dispatch) => ({
  setStep: dispatch.quiz.setStep,
  getFilials: () => dispatch.map.getFilials
});

export default connect(mapState as any, mapDispatch as any)(RecordScreen);
