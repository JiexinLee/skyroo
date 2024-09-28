import React from "react";
import { View, StyleSheet, DimensionValue, Text } from "react-native";

interface DividerProps {
  direction?: "horizontal" | "vertical";
  thickness?: DimensionValue;
  length?: number;
  color?: string;
  margin?: number;
  text?: string;
}
const Divider = ({
  direction = "horizontal",
  thickness = 1,
  color = "#000",
  margin = 10,
  text = "",
  length = 100,
}: DividerProps) => {
  const isHorizontal = direction === "horizontal";
  const sizeForEach = length / 2 - 5;
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: isHorizontal ? "row" : "column",
          alignItems: "center",
        },
      ]}
    >
      <View
        style={[
          styles.divider,
          {
            backgroundColor: color,
            width: isHorizontal ? `${sizeForEach}%` : thickness,
            height: isHorizontal ? thickness : `${sizeForEach}%`,
            marginVertical: isHorizontal ? margin : 0,
            marginHorizontal: isHorizontal ? 0 : margin,
          },
        ]}
      />
      {text && <Text style={styles.text}>{text}</Text>}
      <View
        style={[
          styles.divider,
          {
            backgroundColor: color,
            width: isHorizontal ? `${sizeForEach}%` : thickness,
            height: isHorizontal ? thickness : `${sizeForEach}%`,
            marginVertical: isHorizontal ? margin : 0,
            marginHorizontal: isHorizontal ? 0 : margin,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
  },
  divider: {
    alignSelf: "center",
  },
  text: {
    paddingHorizontal: 10,
    textAlign: "center",
    fontFamily: "shortStack",
  },
});

export default Divider;
