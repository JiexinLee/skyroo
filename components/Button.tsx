import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

interface ButtonProps {
  onPress: () => void;
  title: string;
  backgroundColor?: string;
  color?: string;
  endIcon?: React.ReactElement;
  size?: number;
}
const Button = ({
  title,
  endIcon,
  onPress,
  backgroundColor = Colors.black,
  color = Colors.white,
  size = 200,
}: ButtonProps) => {
  const fontSize = size / 10;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 30,
        width: size,
        padding: 10,
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          display: "flex",
          marginLeft: "auto",
          color,
          fontFamily: "shortStack",
          fontWeight: "600",
          fontSize,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          display: "flex",
          marginLeft: "auto",
        }}
      >
        {endIcon}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
