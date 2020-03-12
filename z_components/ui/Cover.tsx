import * as React from "react";
import { Image, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { MAX_HEADER_HEIGHT, HEADER_DELTA } from "./Vars";

interface CoverProps {
  y: Animated.Value<number>;
}

const { interpolate, Extrapolate } = Animated;

export default ({ y }: CoverProps) => {
  const scale: any = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT, 0],
    outputRange: [4, 1],
    extrapolateRight: Extrapolate.CLAMP
  });
  const opacity = interpolate(y, {
    inputRange: [-64, 0, HEADER_DELTA],
    outputRange: [0, 0.2, 1],
    extrapolate: Extrapolate.CLAMP
  });
  return (
    <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
      <Image
        style={styles.image}
        source={require("../../z_assets/img/ava.jpg")}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "black",
          opacity
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: MAX_HEADER_HEIGHT * 2
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined
  }
});
