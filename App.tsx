import React, { useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { store } from "./store";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import MyTabNavigator from "./MyTabNavigator";

// const statusBarHeight = () => getStatusBarHeight();

// if (Platform.OS === "android" && statusBarHeight >= 24) {
//   SafeAreaView.setStatusBarHeight(0);
// }

async function loadApp() {
  await Font.loadAsync({
    ...Ionicons.font
  });
}

const App = () => {
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
          <MyTabNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
