import { View, Text, Pressable } from "react-native";
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
  size?: number;
}
const Navigate = ({
  navigateTo,
  title,
  backgroundColor = Colors.black,
  color = Colors.white,
  endIcon,
  variant = "default",
  onPress,
  size = 200,
}: NavigateProps) => {
  const widthSize = size;
  const fontSize = size / 10;
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
