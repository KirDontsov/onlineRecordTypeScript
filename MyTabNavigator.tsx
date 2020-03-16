import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  activeColor,
  passiveColor,
  blackColor,
  lightColor,
  whiteColor,
  disabledColor
} from "./z_components/ui/Vars";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { iRootState, Dispatch } from "./store";
import { connect } from "react-redux";
import HomeStackScreen from "./z_stacks/HomeStack";
import ProfileStackScreen from "./z_stacks/ProfileStack";

interface MyTabNavigatorProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation?: any;
}

const Tab = createBottomTabNavigator();

const MyTabNavigator = (props: MyTabNavigatorProps): JSX.Element => {
  return (
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
          shadowColor: whiteColor,
          shadowOffset: {
            width: 12,
            height: 12
          },
          shadowOpacity: 0.11,
          shadowRadius: 16.0,

          elevation: 6,
          backgroundColor: props.darkTheme ? blackColor : whiteColor
        },
        // safeAreaInset: { bottom: "never", top: "never" }
        activeTintColor: props.darkTheme ? whiteColor : activeColor,
        inactiveTintColor: props.darkTheme ? disabledColor : passiveColor,

        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

const mapState = (state: iRootState) => ({
  darkTheme: state.theme.darkTheme
});

const mapDispatch = (dispatch: Dispatch) => ({
  setDarkTheme: dispatch.theme.setDarkTheme
});

export default connect(mapState as any, mapDispatch as any)(MyTabNavigator);
