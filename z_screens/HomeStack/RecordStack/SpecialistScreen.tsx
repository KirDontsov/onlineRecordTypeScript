import React, { Component } from "react";
import { IProfile } from "../../../@types/Interfaces";
import { Asset } from "expo-asset";
import Loader from "../../../z_components/ui/Loader";
import Profiles from "../../../z_components/Profiles";

const profiles: IProfile[] = [
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

export interface ISpecialistScreenProps {
  navigation?: any;
}

export interface ISpecialistScreenState {
  ready: boolean;
}

class SpecialistScreen extends Component<ISpecialistScreenProps, ISpecialistScreenState> {
  state = {
    ready: false
  };

  async componentDidMount() {
    await Promise.all(profiles.map(profile => Asset.loadAsync(profile.profile)));
    this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;
    if (!ready) {
      return <Loader />;
    }
    return <Profiles {...{ profiles }} navigation={this.props.navigation} />;
  }
}

export { SpecialistScreen };

export default SpecialistScreen;
