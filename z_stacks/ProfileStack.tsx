import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { activeColor, whiteColor, config } from "./../z_components/ui/Vars";
import { ProfileScreen, SettingsScreen } from "./../z_screens";
import { iRootState } from "../store";
import { connect } from "react-redux";

interface ProfileStackProps extends Partial<ReturnType<typeof mapState>> {
  navigation?: any;
}

const ProfileStack = createStackNavigator();

const ProfileStackScreen = (props: ProfileStackProps) => {
  return (
    <ProfileStack.Navigator
      headerMode="float"
      screenOptions={{ ...config, headerTintColor: whiteColor }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профиль",
          headerTintColor: props.darkTheme ? whiteColor : activeColor,
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
      <ProfileStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Настройки",
          headerTintColor: props.darkTheme ? whiteColor : activeColor,
          headerBackTitle: null,
          headerTruncatedBackTitle: ""
        }}
      />
    </ProfileStack.Navigator>
  );
};

const mapState = (state: iRootState) => ({
  darkTheme: state.theme.darkTheme
});

export default connect(mapState as any)(ProfileStackScreen);
