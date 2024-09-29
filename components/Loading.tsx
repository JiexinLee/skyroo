import { ActivityIndicator } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

interface LoadingProps {
  size?: "small" | "large" | number;
  color?: string;
}
const Loading = ({ size = "large", color = Colors.black }: LoadingProps) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Loading;
