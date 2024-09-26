import { View, Text, Pressable } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import { Colors } from "../constants/Colors";

interface NavigateProps {
  navigateTo: Href<string | object>;
  title: string;
  backgroundColor?: string;
  color?: string;
  endIcon?: React.ReactElement;
}
const Navigate = ({
  navigateTo,
  title,
  backgroundColor = Colors.black,
  color = Colors.white,
  endIcon,
}: NavigateProps) => {
  return (
    <Link
      href={navigateTo}
      asChild
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 30,
        width: 200,
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
            fontSize: 18,
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
