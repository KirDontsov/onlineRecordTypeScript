import React, { useEffect } from "react";
import { View } from "react-native";
import { IProfile } from "../../../@types/Interfaces";
import Loader from "../../../z_components/ui/Loader";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../../store";
import HorizontalCalendarList from "../../../z_components/CalendarScreen/HorizontalCalendarList";

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

const ServicesScreen: React.FC<IServiceScreenProps> = ({ props }) => {
  // useEffect(() => {
  //   props.fetchSpecialists();
  // });
  return <HorizontalCalendarList />;
};

const mapState = (state: iRootState) => ({
  step: state.quiz.step,
  specialists: state.quiz.specialists,
  isReadySpecialists: state.quiz.isReadySpecialists
});

const mapDispatch = (dispatch: Dispatch) => ({
  fetchSpecialists: dispatch.quiz.fetchSpecialists,
  setChosenSpecialist: dispatch.quiz.setChosenSpecialist
});

export default connect(mapState as any, mapDispatch as any)(ServicesScreen);
