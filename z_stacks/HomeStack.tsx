import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  activeColor,
  whiteColor,
  config,
  passiveColor
} from "./../z_components/ui/Vars";
import {
  HomeScreen,
  MapScreen,
  RecordScreen,
  SpecialistScreen,
  ServicesScreen,
  CalendarScreen
} from "./../z_screens";
import { iRootState } from "../store";
import { connect } from "react-redux";

interface HomeStackProps extends Partial<ReturnType<typeof mapState>> {
  navigation?: any;
}

const HomeStack = createStackNavigator();

const HomeStackScreen = (props: HomeStackProps) => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={config}
      headerMode="float"
    >
      <HomeStack.Screen
        name="City"
        component={HomeScreen}
        options={{
          title: "Выберите город",
          headerTintColor: props.darkTheme ? whiteColor : passiveColor,
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <HomeStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Выберите филиал",
          headerTintColor: props.darkTheme ? whiteColor : activeColor,
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <HomeStack.Screen
        name="Record"
        component={RecordScreen}
        options={{
          title: "Запись",
          headerTintColor: props.darkTheme ? whiteColor : activeColor,
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <HomeStack.Screen
        name="SpecialistScreen"
        component={SpecialistScreen}
        options={{
          title: "Выбор специалиста",
          headerTintColor: props.darkTheme ? whiteColor : activeColor,
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <HomeStack.Screen
        name="ServicesScreen"
        component={ServicesScreen}
        options={{
          title: "Выбор услуги",
          headerTintColor: props.darkTheme ? whiteColor : activeColor,
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <HomeStack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          title: "Выбор дня",
          headerTintColor: props.darkTheme ? whiteColor : activeColor,
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      {/*<HomeStack.Screen
        name="TimeScreen"
        component={TimeScreen}
        options={{
          title: "Выбор времени"
        }}
      /> */}
    </HomeStack.Navigator>
  );
};

const mapState = (state: iRootState) => ({
  darkTheme: state.theme.darkTheme
});

export default connect(mapState as any)(HomeStackScreen);
