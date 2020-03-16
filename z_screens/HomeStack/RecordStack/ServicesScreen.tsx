import React, { useEffect } from "react";
import { View, StyleSheet, TextStyle } from "react-native";
import { IProfile } from "../../../@types/Interfaces";
import Loader from "../../../z_components/ui/Loader";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../../store";
import HorizontalCalendarList from "../../../z_components/CalendarScreen/HorizontalCalendarList";
import { SafeAreaView } from "react-native-safe-area-context";
import LightStatusBar from "../../../z_components/ui/StatusBar";
import { container, blackColor } from "../../../z_components/ui/Vars";

interface IServiceScreenProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation?: any;
  profiles?: IProfile[];
  props: {
    services: IProfile[];
    fetchSpecialists: () => void;
  };
  // city?: string;
  // data?: any;
  // id?: string | number;
}

export interface Styles {
  containerLight?: {};
  containerDark?: {};
  gradient?: {};
  textLight?: TextStyle;
  textDark?: TextStyle;
  switchContainer: {};
}

const services: IProfile[] = [
  {
    id: "1",
    name: "Lorem",
    age: 24,
    profile: require("./../../../z_assets/img/ava.jpg")
  },
  {
    id: "2",
    name: "Lorem Ipsum",
    age: 24,
    profile: require("./../../../z_assets/img/ava_2.jpg")
  },
  {
    id: "3",
    name: "Lorem Ipsum",
    age: 24,
    profile: require("./../../../z_assets/img/ava.jpg")
  },
  {
    id: "4",
    name: "Lorem Ipsum",
    age: 24,
    profile: require("./../../../z_assets/img/ava_2.jpg")
  },
  {
    id: "5",
    name: "Lorem Ipsum",
    age: 24,
    profile: require("./../../../z_assets/img/ava.jpg")
  }
];

const ServicesScreen = (props: IServiceScreenProps): JSX.Element => {
  // useEffect(() => {
  //   props.fetchSpecialists();
  // });
  return (
    <SafeAreaView
      style={props.darkTheme ? styles.containerDark : styles.containerLight}
    >
      <LightStatusBar />
      <HorizontalCalendarList navigation={props.navigation} />
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
  step: state.quiz.step,
  specialists: state.quiz.specialists,
  isReadySpecialists: state.quiz.isReadySpecialists,
  darkTheme: state.theme.darkTheme
});

const mapDispatch = (dispatch: Dispatch) => ({
  fetchSpecialists: dispatch.quiz.fetchSpecialists,
  setChosenSpecialist: dispatch.quiz.setChosenSpecialist
});

export default connect(mapState as any, mapDispatch as any)(ServicesScreen);
