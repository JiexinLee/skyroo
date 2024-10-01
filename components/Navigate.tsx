import { View, Text, Pressable, DimensionValue } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import { Colors } from "../constants/Colors";

interface NavigateProps {
  navigateTo: Href<string | object>;
  variant?: "default" | "link";
  title: string;
  backgroundColor?: string;
  color?: string;
  endIcon?: React.ReactElement;
  onPress?: () => void;
  size?: DimensionValue;
  fontSize?: number;
  height?: DimensionValue;
}
const Navigate = ({
  navigateTo,
  title,
  backgroundColor = Colors.black,
  color = Colors.white,
  endIcon,
  variant = "default",
  onPress,
  height,
  size = 200,
  fontSize = 20,
}: NavigateProps) => {
  const widthSize = size;
  return (
    <Link
      href={navigateTo}
      asChild
      onPress={onPress}
      style={{
        backgroundColor:
          variant === "default" ? backgroundColor : "transparent",
        borderRadius: 30,
        width: widthSize,
        padding: 10,
        alignItems: "center",
        height,
      }}
    >
      <Pressable
        style={{
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
            textDecorationLine: variant === "link" ? "underline" : "none",
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
      </Pressable>
    </Link>
  );
};

export default Navigate;
