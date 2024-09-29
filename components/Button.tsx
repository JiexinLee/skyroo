import { DimensionValue, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import Loading from "./Loading";

interface ButtonProps {
  onPress: () => void;
  title: string;
  backgroundColor?: string;
  color?: string;
  endIcon?: React.ReactElement;
  size?: DimensionValue;
  fontSize?: number;
  spaceY?: number;
  spaceX?: number;
  loading?: boolean;
  disabled?: boolean;
}
const Button = ({
  title,
  endIcon,
  onPress,
  backgroundColor = Colors.black,
  color = Colors.white,
  size = 200,
  fontSize = 20,
  spaceY = 0,
  spaceX = 0,
  loading,
  disabled,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 30,
        width: size,
        minHeight: 55,
        padding: 10,
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: spaceY,
        marginHorizontal: spaceX,
      }}
    >
      {loading ? (
        <Loading color={Colors.white} size="small" />
      ) : (
        <>
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
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
