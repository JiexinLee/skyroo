import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import Input from "../components/Input";
import Divider from "../components/ Divider";
import AvoidKeyboard from "../components/AvoidKeyboardView";
import OAuthForm from "../components/auth/OAuthForm";
import Button from "../components/Button";
import { useAuthActions } from "@convex-dev/auth/react";
import SignUpForm from "../components/auth/SignUpForm";

const SignUpPage = () => {
  const router = useRouter();
  const { signIn } = useAuthActions();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const onSignUp = () => {
    try {
      setLoading(true);
      signIn("password", {
        email: email.toLowerCase(),
        password,
        flow: "signUp",
      }).then(() => {
        setLoading(false);
      });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* <View style={{ position: "absolute", top: 60, left: 20, zIndex: 99 }}>
          <FontAwesome5
            name="arrow-circle-left"
            size={28}
            color={Colors.black}
            onPress={() => router.back()}
          />
        </View> */}
        {/* <SafeAreaView
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.lightIndigo,
            gap: 10,
            paddingBottom: 0,
          }}
        >
          <Text style={styles.pageTitle}>Create Account</Text>
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
            <Button
              title="Continue"
              onPress={onSignUp}
              size="80%"
              spaceY={10}
              loading={loading}
            />
            <Divider length={80} color={Colors.black} text="Or" margin={15} />
          </AvoidKeyboard>
          <OAuthForm loading={loading} type="signUp" />
        </SafeAreaView> */}
        <SignUpForm />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    padding: 10,
    position: "relative",
    backgroundColor: Colors.white,
  },
  inputsContainer: {
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: "auto",
  },
  pageTitle: {
    fontFamily: "shortStack",
    fontSize: 24,
    position: "absolute",
    top: "8%",
  },
});
