import { Animated, StyleSheet } from "react-native";
import React from "react";

interface BackdropProps {
  scrollX: Animated.Value;
  backgroundColors: string[];
  width: number;
}
const Backdrop = ({ scrollX, backgroundColors, width }: BackdropProps) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: backgroundColors.map((_, i) => i * width),
    outputRange: backgroundColors.map((color) => color),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },
      ]}
    />
  );
};

export default Backdrop;
