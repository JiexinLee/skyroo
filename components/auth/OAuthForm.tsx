import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignInWithGoogle from "./SignInWithGoogle";

const OAuthForm = () => {
  return (
    <View style={styles.container}>
      <SignInWithGoogle />
    </View>
  );
};

export default OAuthForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
