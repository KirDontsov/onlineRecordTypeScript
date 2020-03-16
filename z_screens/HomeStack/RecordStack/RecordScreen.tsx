import React, { Component } from "react";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../../store";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../../../z_components/ui/StatusBar";
import AppTextTitle from "../../../z_components/ui/AppTextTitle";
import AppText from "../../../z_components/ui/AppText";
import { container, blackColor } from "../../../z_components/ui/Vars";
import AppButton from "../../../z_components/ui/AppButton";
interface Styles {
  containerLight: {};
  containerDark: {};
  textLight: {};
  textDark: {};
}

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
    this.props.navigation.navigate("SpecialistScreen");
    this.props.setStep(1);
  }
  nextServices() {
    this.props.navigation.navigate("ServicesScreen");
    this.props.setStep(2);
  }
  nextTime() {
    this.props.navigation.navigate("CalendarScreen");
    this.props.setStep(3);
  }

  render() {
    // const { navigation } = this.props;

    return (
      <SafeAreaView
        style={
          this.props.darkTheme ? styles.containerDark : styles.containerLight
        }
      >
        <LightStatusBar />
        <AppText
          style={this.props.darkTheme ? styles.textDark : styles.textLight}
        >
          Бассейн:
        </AppText>
        <AppTextTitle
          style={this.props.darkTheme ? styles.textDark : styles.textLight}
        >
          {" "}
          {this.props.chosenFilial}
        </AppTextTitle>

        <AppButton
          title="Выбрать специалиста"
          onPress={() => this.nextSpecialist()}
        />
        <AppButton title="Выбрать услугу" onPress={() => this.nextServices()} />
        <AppButton title="Выбрать время" onPress={() => this.nextTime()} />
        <AppText
          style={this.props.darkTheme ? styles.textDark : styles.textLight}
        >
          Вы выбрали:
        </AppText>
        <AppText
          style={this.props.darkTheme ? styles.textDark : styles.textLight}
        >
          {this.props.chosenCity}
        </AppText>
        <AppText
          style={this.props.darkTheme ? styles.textDark : styles.textLight}
        >
          {this.props.chosenFilial}
        </AppText>
        <AppText
          style={this.props.darkTheme ? styles.textDark : styles.textLight}
        >
          {this.props.chosenSpecialist}
        </AppText>
        <AppText
          style={this.props.darkTheme ? styles.textDark : styles.textLight}
        >
          {this.props.date}
        </AppText>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create<Styles>({
  containerLight: { ...container, backgroundColor: "#fff" },
  containerDark: { ...container, backgroundColor: blackColor },
  textLight: { color: blackColor },
  textDark: { color: "#fff" }
});

const mapState = (state: iRootState) => ({
  step: state.quiz.step,
  item: state.quiz.item,
  specialists: state.quiz.specialists,
  chosenSpecialist: state.quiz.chosenSpecialist,
  service: state.quiz.service,
  date: state.quiz.date,
  chosenFilial: state.map.chosenFilial,
  chosenCity: state.city.chosenCity,
  darkTheme: state.theme.darkTheme
});

const mapDispatch = (dispatch: Dispatch) => ({
  setStep: dispatch.quiz.setStep,
  getFilials: () => dispatch.map.getFilials
});

export default connect(mapState as any, mapDispatch as any)(RecordScreen);
