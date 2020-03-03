import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../store";
import SafeAreaView from "react-native-safe-area-view";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
// const polyline = require("@mapbox/polyline");
import LightStatusBar from "../../z_components/ui/StatusBar";
import { container } from "../../z_components/ui/Vars";
import { mapStyle } from "../../Maps";

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
  container: any;
  mapStyle: {
    width: number;
    height: number;
  };
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
    }
  };

  continue = () => {
    this.props.navigation.navigate("Record");
    this.props.setFilial("Биг Вэйв");
    console.log(this.props.chosenFilial);
  };

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <LightStatusBar />
        <MapView
          style={styles.mapStyle}
          customMapStyle={mapStyle}
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
            onCalloutPress={() => this.continue()}
          ></Marker>
        </MapView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create<Styles>({
  container: container,
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

const mapState = (state: iRootState) => ({
  chosenCity: state.city.chosenCity,
  isReadyMap: state.map.isReadyMap,
  chosenFilial: state.map.chosenFilial
});

const mapDispatch = (dispatch: Dispatch) => ({
  getFilials: () => dispatch.map.getFilials,
  setFilial: dispatch.map.setFilial
});

export default connect(mapState as any, mapDispatch as any)(MapScreen);
