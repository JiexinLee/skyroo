import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import SignUpTabs, { TabItem } from "./SignUpTabs";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInRight, FadeOutRight } from "react-native-reanimated";

const testData: TabItem[] = [
  {
    icon: "House",
    label: "Tab 1",
  },
  {
    icon: "Mail",
    label: "Tab 2",
  },
  {
    icon: "Package",
    label: "Tab 3",
  },
];

const tabScreenColors = [
  Colors.lightIndigo,
  Colors.lightYellow,
  Colors.red,
  Colors.white,
];
const SignUpForm = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <SignUpTabs
        data={testData}
        selectedIndex={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
      />
      <Animated.View
        key={`signUp-tab-${selectedIndex}`}
        entering={FadeInRight.springify().damping(80).stiffness(200)}
        exiting={FadeOutRight.springify().damping(80).stiffness(200)}
        style={{
          flex: 1,
          backgroundColor: tabScreenColors[selectedIndex],
          borderRadius: 12,
        }}
      ></Animated.View>
    </SafeAreaView>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
});
