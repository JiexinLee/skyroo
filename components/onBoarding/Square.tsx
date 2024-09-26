import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

interface SquareProps {
  scrollX: Animated.Value;
  height: number;
  width: number;
}
const Square = ({ scrollX, height, width }: SquareProps) => {
  const yolo = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );
  const rotate = yolo.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });
  const translateX = yolo.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height,
        backgroundColor: Colors.white,
        borderRadius: 86,
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [{ rotate }, { translateX }],
      }}
    />
  );
};

export default Square;

const styles = StyleSheet.create({});
