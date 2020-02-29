import React, { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  KeyboardAvoidingView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { activeColor } from "../z_components/ui/Vars";
import Loader from "../z_components/ui/Loader";
import SearchInput, { createFilter } from "react-native-search-filter";
import { RematchDispatch, RematchRootState } from "@rematch/core";
import { models } from "../store";

const KEYS_TO_FILTERS = ["city", "id"];

class Cities extends Component {
  state = {
    searchTerm: ""
  };
  fetchCities = async () => {
    const res = await axios.get("http://book-service.tw1.su/city.json");
    this.props.getCities(res.data);
    this.props.setIsReady(true);
  };
  componentDidMount() {
    this.fetchCities();
  }

  continue = item => {
    this.props.setCity(item.city);
    this.props.navigation.navigate("Map");
  };

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    let fliteredData = this.props.cities;

    console.log(this.props.cities);
    // if (this.props.cities !== undefined && this.props.cities.length() !== 0)
    if (this.props.isReady) {
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
        {this.props.isReady ? (
          <FlatList
            style={[styles.container]}
            data={fliteredData}
            renderItem={({ item }) => {
              return (
                <View>
                  <FontAwesome.Button
                    name="location-arrow"
                    style={[styles.listItem]}
                    iconStyle={styles.icon}
                    color={"#000"}
                    onPress={item => this.continue(item)}
                  >
                    {item.city}
                  </FontAwesome.Button>
                  <View style={[styles.listDivider]} />
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        ) : (
          <Loader />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height
  },
  searchInput: {
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1
  },
  list: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  listItem: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    zIndex: 1,
    fontSize: 40,
    fontFamily: "Montserrat",
    fontWeight: "700",
    color: "#000000",
    backgroundColor: "#fff",
    paddingLeft: 50,
    height: 50
  },
  icon: {
    position: "absolute",
    left: "5%",
    color: activeColor
  },
  listDivider: {
    alignSelf: "center",
    position: "absolute",
    zIndex: 3,
    bottom: 1,
    borderBottomColor: "#A4BFEB",
    borderBottomWidth: 0.5,
    width: "90%"
  }
});

const mapState = (state: RematchRootState<models>) => ({
  textInput: state.city.textInput,
  cities: state.city.cities,
  chosenCity: state.city.chosenCity,
  isReadyCity: state.city.isReadyCity
});

const mapDispatch = (dispatch: RematchDispatch<models>) => ({
  setTextInput: () => dispatch.city.setTextInput(),
  getCities: () => dispatch.city.getCities(),
  setCity: () => dispatch.city.setCity(),
  setIsReady: () => dispatch.city.setIsReady()
});

export default connect(mapState as any, mapDispatch as any)(Cities);
