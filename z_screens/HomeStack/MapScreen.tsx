import React, { Component } from "react";
import { StyleSheet, Text, Dimensions, Alert } from "react-native";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../store";
import SafeAreaView from "react-native-safe-area-view";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
// const polyline = require("@mapbox/polyline");
import LightStatusBar from "../../z_components/ui/StatusBar";
import { container } from "../../z_components/ui/Vars";
import { mapStyleLight, mapStyleDark } from "../../Maps";

interface MapProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation?: any;
  searchTerm?: string;
  city?: string;
  data?: any;
  id?: string | number;
}

interface Styles {
  container?: any;
  mapStyle?: {
    width: number;
    height: number;
  };
  callOut?: any;
}

class MapScreen extends Component<MapProps> {
  state = {
    region: {
      latitude: 44.5622,
      longitude: 38.0848,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    marker: {
      latitude: 44.5622,
      longitude: 38.0848
    },
    marker2: {
      latitude: 44.56,
      longitude: 38.08
    }
  };

  continue = () => {
    this.props.navigation.navigate("Record");
    this.props.setFilial("Тра та та");
    console.log(this.props.chosenFilial);
  };
  continue2 = () => {
    this.props.navigation.navigate("Record");
    this.props.setFilial("Другое тра та та");
    console.log(this.props.chosenFilial);
  };

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <LightStatusBar />
        <MapView
          style={styles.mapStyle}
          customMapStyle={this.props.darkTheme ? mapStyleDark : mapStyleLight}
          provider={PROVIDER_GOOGLE}
          region={this.state.region}
        >
          {/* <Polyline coordinates={coords} strokeColor="red" strokeWidth={1} /> */}
          <Marker
            coordinate={this.state.marker}
            title={`Бассейн "Биг Вэйв"`}
            description={"Грудничковое плавание"}
            // onPress={() => {
            //   console.log(`Бассейн "Биг Вэйв"`);
            // }}
            onCalloutPress={() => {
              Alert.alert("Нажатие на день", "Сюда можно передать функцию", [
                { text: "ОК" }
              ]);
            }}
            image={require("../../z_assets/img/pin.png")}
          >
            {/* <Callout>
              <Text style={styles.callOut}>Тра та та</Text>
            </Callout> */}
          </Marker>
          <Marker
            coordinate={this.state.marker2}
            // title={`Бассейн "Тра та та"`}
            // description={"Грудничковое плавание"}
            onPress={() => {
              Alert.alert("Нажатие на день", `Бассейн "Тра та та"`, [
                { text: "ОК", onPress: () => this.continue() }
              ]);
            }}
            // onCalloutPress={() => this.continue2()}
            image={require("../../z_assets/img/pin.png")}
          >
            <Callout>
              <Text style={styles.callOut}>Бассейн "Тра та та"</Text>
            </Callout>
          </Marker>
        </MapView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create<Styles>({
  container: container,
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 30
  },
  callOut: {
    padding: 20
  }
});

const mapState = (state: iRootState) => ({
  chosenCity: state.city.chosenCity,
  isReadyMap: state.map.isReadyMap,
  chosenFilial: state.map.chosenFilial,
  darkTheme: state.theme.darkTheme
});

const mapDispatch = (dispatch: Dispatch) => ({
  getFilials: () => dispatch.map.getFilials,
  setFilial: dispatch.map.setFilial
});

export default connect(mapState as any, mapDispatch as any)(MapScreen);
