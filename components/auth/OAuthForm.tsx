import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignInWithGoogle from "./SignInWithGoogle";

interface OAuthFormProps {
  loading?: boolean;
  type: "signIn" | "signUp";
}
const OAuthForm = ({ loading, type }: OAuthFormProps) => {
  return (
    <View style={styles.container}>
      <SignInWithGoogle loading={loading} type={type} />
    </View>
  );
};

export default OAuthForm;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: "auto",
  },
});
