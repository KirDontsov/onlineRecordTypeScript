import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { IProfile } from "../../../@types/Interfaces";
// import Loader from "../../../z_components/ui/Loader";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../../store";
import HorizontalCalendarList from "../../../z_components/CalendarScreen/HorizontalCalendarList";
import { SafeAreaView } from "react-native-safe-area-context";
import LightStatusBar from "../../../z_components/ui/StatusBar";
import { LinearGradient } from "expo-linear-gradient";
import { activeColor, passiveColor } from "../../../z_components/ui/Vars";
import Cover from "../../../z_components/ui/Cover";
import Animated from "react-native-reanimated";

interface ICalendarScreenProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation?: any;
  profiles: IProfile[];
  props: any;
}
const { Value } = Animated;

const SpecialistScreen: React.FC<ICalendarScreenProps> = ({ props }) => {
  // async componentDidMount() {
  //   this.props.fetchSpecialists();
  // }

  // const { isReadySpecialists } = this.props;
  // if (!isReadySpecialists) {
  //   return <Loader />;
  // }
  const y = new Value(0);
  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      <LinearGradient
        colors={[activeColor, passiveColor]}
        style={styles.gradient}
      >
        <Cover {...{ y }} />
        <ScrollView>
          <HorizontalCalendarList />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradient: {
    flex: 1
  }
});

const mapState = (state: iRootState) => ({
  step: state.quiz.step,
  specialists: state.quiz.specialists,
  isReadySpecialists: state.quiz.isReadySpecialists
});

const mapDispatch = (dispatch: Dispatch) => ({
  fetchSpecialists: dispatch.quiz.fetchSpecialists,
  setChosenSpecialist: dispatch.quiz.setChosenSpecialist
});

export default connect(mapState as any, mapDispatch as any)(SpecialistScreen);
