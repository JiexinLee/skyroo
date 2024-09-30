import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  Easing,
  Image,
  DimensionValue,
  Text,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useFrozen } from "../../context/freez-context";

interface ModalProps {
  direction?: "top" | "bottom";
  label?: string;
  onClose: () => void;
  show?: boolean;
  showBorder?: boolean;
  width?: DimensionValue;
  height?: DimensionValue;
  closeButton?: boolean;
  duration?: number;
  content: React.ReactElement;
}
const Modal = ({
  direction = "bottom",
  onClose,
  show,
  showBorder,
  width = "70%",
  height = "20%",
  closeButton,
  label,
  duration = 800,
  content,
}: ModalProps) => {
  const { setIsWaiting } = useFrozen();
  const { height: screenHeight } = Dimensions.get("screen");

  const startPointY = direction === "top" ? -screenHeight : screenHeight;
  const transY = useRef(new Animated.Value(startPointY));

  const startAnimation = (value: number) => {
    Animated.timing(transY.current, {
      toValue: value,
      duration,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (show) {
      startAnimation(0);
      setIsWaiting(true);
    } else {
      startAnimation(startPointY);
      setIsWaiting(false);
    }
  }, [show]);

  const border = showBorder
    ? { borderColor: Colors.black, borderWidth: 1 }
    : {};

  const backgroundOpacity = transY.current.interpolate({
    inputRange: startPointY >= 0 ? [0, startPointY] : [startPointY, 0],
    outputRange: startPointY >= 0 ? [0.7, 0] : [0, 0.7],
    extrapolate: "clamp",
  });

  return (
    <>
      <Animated.View
        pointerEvents="none"
        style={[styles.outerContainer, { opacity: backgroundOpacity }]}
      />
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: transY.current }] },
        ]}
      >
        <View style={[styles.innerContainer, { width, height, ...border }]}>
          {closeButton && (
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons
                name="close-circle-outline"
                size={24}
                color={Colors.white}
              />
            </TouchableOpacity>
          )}
          {content}
          {label && <Text style={styles.labelText}>{label}</Text>}
        </View>
      </Animated.View>
    </>
  );
};

export default Modal;

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Colors.black,
    position: "absolute",
  },
  container: {
    zIndex: 99999,
    position: "absolute",
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: -15,
    right: -12,
  },
  labelText: {
    fontSize: 12,
    fontFamily: "shortStack",
    color: Colors.black,
  },
});
