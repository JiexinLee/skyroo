import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const Loading = () => {
  return <ActivityIndicator size="large" color={Colors.primary} />;
};

export default Loading;

const styles = StyleSheet.create({});
