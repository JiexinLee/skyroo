import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import Input from "../components/Input";
import Divider from "../components/ Divider";
import AvoidKeyboard from "../components/AvoidKeyboardView";

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            gap: 10,
          }}
        >
          <AvoidKeyboard style={styles.inputsContainer}>
            <Input
              value={name}
              label="Full Name"
              onChangeText={(value) => setName(value)}
            />
            <Input
              value={email}
              type="email-address"
              label="Email"
              onChangeText={(value) => setEmail(value)}
            />
            <Input
              value={password}
              password
              label="Password"
              onChangeText={(value) => setPassword(value)}
            />
            <Input
              value={confirmPassword}
              password
              label="Confirm Password"
              onChangeText={(value) => setConfirmPassword(value)}
            />
          </AvoidKeyboard>
          <Divider length={80} color={Colors.black} text="Or" margin={15} />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
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
  inputsContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
