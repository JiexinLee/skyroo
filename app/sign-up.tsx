import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const SignUpPage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 60, left: 20, zIndex: 99 }}>
        <FontAwesome5
          name="arrow-circle-left"
          size={28}
          color={Colors.black}
          onPress={() => router.back()}
        />
      </View>
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.lightIndigo,
        }}
      >
        <Text>123</Text>
      </SafeAreaView>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: Colors.white,
  },
});
