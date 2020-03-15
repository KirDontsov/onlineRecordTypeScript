import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { activeColor, passiveColor } from "./z_components/ui/Vars";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
// import { getStatusBarHeight } from "react-native-status-bar-height";
import { store } from "./store";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import { BlurView } from "expo-blur";

// const statusBarHeight = () => getStatusBarHeight();

// if (Platform.OS === "android" && statusBarHeight >= 24) {
//   SafeAreaView.setStatusBarHeight(0);
// }

// import {
//   HomeScreen,
//   MapScreen,
//   SettingsScreen,
//   ProfileScreen,
//   RecordScreen,
//   // quiz
//   FirstScreen,
//   SecondScreen,
//   ThirdScreen,
//   TimeScreen
// } from "./screens";

import {
  HomeScreen,
  MapScreen,
  RecordScreen,
  SpecialistScreen,
  ServicesScreen,
  CalendarScreen,
  ProfileScreen,
  SettingsScreen
} from "./z_screens";

// config
const config = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  ...TransitionPresets.SlideFromRightIOS,
  headerTintColor: activeColor,
  headerTransparent: true,
  headerBackground: () => (
    <BlurView tint="light" intensity={5} style={StyleSheet.absoluteFill} />
  )
};

async function loadApp() {
  await Font.loadAsync({
    ...Ionicons.font
  });
}

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function HomeStackScreen() {
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
          headerTintColor: "#fff",
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <HomeStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Выберите филиал",
          headerTintColor: activeColor,
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <HomeStack.Screen
        name="Record"
        component={RecordScreen}
        options={{
          title: "Запись",
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <HomeStack.Screen
        name="SpecialistScreen"
        component={SpecialistScreen}
        options={{
          title: "Выбор специалиста",
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <HomeStack.Screen
        name="ServicesScreen"
        component={ServicesScreen}
        options={{
          title: "Выбор услуги",
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <HomeStack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          title: "Выбор дня",
          headerTintColor: "#fff",
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
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      headerMode="float"
      screenOptions={{ ...config, headerTintColor: "#fff" }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профиль",
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <ProfileStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Настройки",
          headerTintColor: activeColor,
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
    </ProfileStack.Navigator>
  );
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={() => loadApp()}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = `pencil`;
                  return (
                    <SimpleLineIcons
                      name={iconName}
                      size={25}
                      color={color}
                      focused={focused}
                    />
                  );
                } else if (route.name === "Profile") {
                  iconName = `ios-person`;
                }
                return (
                  <Ionicons
                    name={iconName}
                    size={25}
                    color={color}
                    focused={focused}
                  />
                );
              }
            })}
            tabBarOptions={{
              style: {
                paddingTop: 10,
                borderTopWidth: 0,
                shadowColor: passiveColor,
                shadowOffset: {
                  width: 12,
                  height: 12
                },
                shadowOpacity: 0.11,
                shadowRadius: 16.0,

                elevation: 6
              },
              // safeAreaInset: { bottom: "never", top: "never" }
              activeTintColor: activeColor,
              inactiveTintColor: passiveColor,

              showLabel: false
            }}
          >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
