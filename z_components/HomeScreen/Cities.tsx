import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { iRootState, Dispatch } from "../../store";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import {
  activeColor,
  passiveColor,
  lightColor,
  windowWidth,
  windowHeight
} from "../ui/Vars";
import Loader from "../ui/Loader";
import SearchInput, { createFilter } from "react-native-search-filter";
import Icon from "react-native-vector-icons/FontAwesome";

const KEYS_TO_FILTERS = ["city", "id"];

interface CitiesProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation?: any;
  searchTerm?: string;
  city?: string;
  data?: any;
  id?: string | number;
}

class Cities extends Component<CitiesProps> {
  state = {
    searchTerm: ""
  };
  componentDidMount() {
    this.props.fetchCities();
  }

  continue = (item: any) => {
    this.props.chooseCity(item.city);
    this.props.navigation.navigate("Map");
  };

  searchUpdated(term: string) {
    this.setState({ searchTerm: term });
  }

  render() {
    let fliteredData = this.props.cities;

    if (this.props.isReadyCities) {
      fliteredData = fliteredData.filter(
        createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
      );
    }

    return (
      <View style={[styles.container]}>
        <SearchInput
          onChangeText={term => {
            this.searchUpdated(term);
          }}
          style={styles.searchInput}
          placeholder="Type a message to search"
        />

        <View style={[styles.list]}>
          {this.props.isReadyCities ? (
            fliteredData.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.listItem}
                  onPress={() => this.continue(item)}
                >
                  <Icon
                    name="location-arrow"
                    size={25}
                    color="white"
                    style={styles.icon}
                  />
                  <Text style={styles.cityTitle}>{item.city}</Text>
                  <Text style={styles.text}>1 филиал</Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <Loader />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 300
  },
  // flatList: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   width: Dimensions.get("window").width,
  //   height: "100%"
  // },
  searchInput: {
    paddingVertical: 5,
    paddingLeft: 25,
    backgroundColor: passiveColor,
    borderRadius: 50,
    marginVertical: 30,
    marginHorizontal: "10%",
    width: "80%"
  },
  list: {
    flex: 1,
    width: windowWidth,
    height: windowHeight
  },
  listItem: {
    position: "relative",
    // flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    zIndex: 1,
    fontSize: 40,
    fontFamily: "Montserrat",
    fontWeight: "700",
    color: "#000000",
    backgroundColor: "#fff",
    paddingLeft: 80,
    height: 60,
    marginVertical: 2,
    borderRadius: 0,
    borderBottomColor: "#A4BFEB",
    borderBottomWidth: 0.5
  },
  icon: {
    position: "absolute",
    left: "8%",
    color: activeColor
  },
  cityTitle: {
    fontWeight: "bold"
  },
  text: {
    color: lightColor
  }
});

const mapState = (state: iRootState) => ({
  cities: state.city.cities,
  isReadyCities: state.city.isReadyCities,
  chosenCity: state.city.chosenCity
});

const mapDispatch = (dispatch: Dispatch) => ({
  fetchCities: dispatch.city.fetchCities,
  chooseCity: dispatch.city.chooseCity
});

// const mapState = (state: RematchRootState<models>) => ({
//   textInput: state.city.textInput,
//   cities: state.city.cities,
//   chosenCity: state.city.chosenCity,
//   isReadyCity: state.city.isReadyCity
// });

// const mapDispatch = (dispatch: RematchDispatch<models>) => ({
//   fetchCities: () => dispatch.city.fetchCities()
//   // setTextInput: () => dispatch.city.setTextInput(),
//   // getCities: () => dispatch.city.getCities(),
//   // setCity: () => dispatch.city.setCity(item.city),
//   // setIsReady: () => dispatch.city.setIsReady(true)
// });

export default connect(mapState as any, mapDispatch as any)(Cities);
