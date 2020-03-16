import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { IProfile, IStyles } from "../../../@types/Interfaces";
// import Loader from "../../../z_components/ui/Loader";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../../store";
import HorizontalCalendarList from "../../../z_components/CalendarScreen/HorizontalCalendarList";
import { SafeAreaView } from "react-native-safe-area-context";
import LightStatusBar from "../../../z_components/ui/StatusBar";
import { LinearGradient } from "expo-linear-gradient";
import {
  activeColor,
  passiveColor,
  container,
  blackColor
} from "../../../z_components/ui/Vars";
import Cover from "../../../z_components/ui/Cover";
import Animated from "react-native-reanimated";

interface ICalendarScreenProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation?: any;
  profiles: IProfile[];
  props: any;
  onPress: () => void;
}
const { Value } = Animated;

const SpecialistScreen = (props: ICalendarScreenProps): JSX.Element => {
  const y = new Value(0);
  return (
    <SafeAreaView
      style={props.darkTheme ? styles.containerDark : styles.containerLight}
    >
      <LightStatusBar />
      <LinearGradient
        colors={
          props.darkTheme
            ? [blackColor, activeColor]
            : [activeColor, passiveColor]
        }
        style={styles.gradient}
      >
        <Cover {...{ y }} />
        <ScrollView>
          <HorizontalCalendarList navigation={props.navigation} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<IStyles>({
  containerLight: {
    ...container,
    backgroundColor: "#fff",
    paddingBottom: 0
  },
  containerDark: {
    ...container,
    backgroundColor: blackColor,
    paddingBottom: 0
  },
  gradient: {
    flex: 1
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
