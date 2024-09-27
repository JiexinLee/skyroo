import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { SignOut } from "../../components/auth/SignOut";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "shortStack" }}>HomeScreen</Text>
      <SignOut />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
});
