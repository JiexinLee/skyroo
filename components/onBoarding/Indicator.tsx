import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

interface IndicatorProps {
  scrollX: Animated.Value;
  dataAmount: number;
  width: number;
}
const Indicator = ({ scrollX, dataAmount, width }: IndicatorProps) => {
  // Generate array of string based on dataAmount
  const data = Array.from({ length: dataAmount }, () =>
    Math.floor(Math.random() * 100)
  );

  return (
    <View style={{ position: "absolute", bottom: 150, flexDirection: "row" }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const outputRange = [0.8, 1.4, 0.8];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange,
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 0.7, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: Colors.black,
              margin: 10,
              opacity,
              transform: [{ scale }],
            }}
          />
        );
      })}
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({});
