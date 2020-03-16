import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { IProfile, IStyles } from "../../../@types/Interfaces";
import Loader from "../../../z_components/ui/Loader";
import Profiles from "../../../z_components/SpecialistsScreen/Profiles";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "./../../../store";
import { SafeAreaView } from "react-native-safe-area-context";
import LightStatusBar from "../../../z_components/ui/StatusBar";
import { container, blackColor } from "../../../z_components/ui/Vars";

interface ISpecialistScreenProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation?: any;
  profiles: IProfile[];
  // city?: string;
  // data?: any;
  // id?: string | number;
}

const profiles: IProfile[] = [
  {
    id: "1",
    name: "Первый",
    age: 24,
    profile: require("./../../../z_assets/img/ava.jpg")
  },
  {
    id: "2",
    name: "Второй",
    age: 24,
    profile: require("./../../../z_assets/img/ava_2.jpg")
  },
  {
    id: "3",
    name: "Третий",
    age: 24,
    profile: require("./../../../z_assets/img/ava.jpg")
  },
  {
    id: "4",
    name: "Четвертый",
    age: 24,
    profile: require("./../../../z_assets/img/ava_2.jpg")
  },
  {
    id: "5",
    name: "Пятый",
    age: 24,
    profile: require("./../../../z_assets/img/ava.jpg")
  }
];

class SpecialistScreen extends Component<ISpecialistScreenProps> {
  async componentDidMount() {
    this.props.fetchSpecialists();
  }

  render() {
    const { isReadySpecialists } = this.props;
    if (!isReadySpecialists) {
      return <Loader />;
    }
    return (
      <SafeAreaView
        style={
          this.props.darkTheme ? styles.containerDark : styles.containerLight
        }
      >
        <LightStatusBar />
        <Profiles {...{ profiles }} navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create<IStyles>({
  containerLight: {
    ...container,
    backgroundColor: "#fff",
    paddingTop: 0,
    paddingBottom: 0
  },
  containerDark: {
    ...container,
    backgroundColor: blackColor,
    paddingTop: 0,
    paddingBottom: 0
  }
});

const mapState = (state: iRootState) => ({
  step: state.quiz.step,
  specialists: state.quiz.specialists,
  isReadySpecialists: state.quiz.isReadySpecialists,
  darkTheme: state.theme.darkTheme
});

const mapDispatch = (dispatch: Dispatch) => ({
  fetchSpecialists: dispatch.quiz.fetchSpecialists,
  setChosenSpecialist: dispatch.quiz.setChosenSpecialist
});

export default connect(mapState as any, mapDispatch as any)(SpecialistScreen);
