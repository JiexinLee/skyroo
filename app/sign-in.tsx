import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SignInForm } from "../components/auth/SignInForm";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <SignInForm />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
