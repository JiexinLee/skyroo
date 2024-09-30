import {
  Animated,
  Easing,
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { Colors } from "../constants/Colors";
import { Feather } from "@expo/vector-icons";

interface InputProps {
  value: string;
  password?: boolean;
  type?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
  label: string;
  animationDuration?: number;
  highlightColor?: string;
}

const Input = ({
  type,
  value,
  password,
  label,
  animationDuration = 300,
  highlightColor = Colors.black,
  onChangeText,
}: InputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const translateY = useRef(new Animated.Value(0));
  const shadowDrop = useRef(new Animated.Value(0));
  const labelScale = useRef(new Animated.Value(1));

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const onFocus = () => {
    Animated.timing(translateY.current, {
      toValue: -45,
      duration: animationDuration,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
    Animated.timing(labelScale.current, {
      toValue: 0.8,
      duration: animationDuration,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
    Animated.timing(shadowDrop.current, {
      toValue: 0.7,
      duration: animationDuration,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const translateX = translateY.current.interpolate({
    inputRange: [-45, 0],
    outputRange: [-20, 0],
    extrapolate: "clamp",
  });

  const onBlur = () => {
    if (!value) {
      Animated.timing(translateY.current, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
      Animated.timing(labelScale.current, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    }
    Animated.timing(shadowDrop.current, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };
  return (
    <Animated.View
      style={[
        styles.container,
        {
          shadowColor: highlightColor,
          shadowOpacity: shadowDrop.current,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.labelContainer,
          {
            transform: [{ translateY: translateY.current }, { translateX }],
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.labelText,
            {
              transform: [{ scale: labelScale.current }],
            },
          ]}
        >
          {label}
        </Animated.Text>
      </Animated.View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={password && passwordVisible ? "visible-password" : type}
        secureTextEntry={password && !passwordVisible}
      />
      {password && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Feather
            name={passwordVisible ? "eye-off" : "eye"}
            size={24}
            color="black"
            style={{ position: "absolute", right: 20, top: -40 }}
          />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 50,
    width: "80%",
    backgroundColor: Colors.white,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 5,
  },
  input: {
    padding: 20,
    paddingLeft: 30,
    paddingRight: 60,
    color: Colors.black,
    fontSize: 16,
    fontFamily: "shortStack",
    position: "relative",
  },
  labelContainer: {
    position: "absolute",
    padding: 20,
  },
  labelText: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "shortStack",
  },
});
