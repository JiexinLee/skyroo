import { MotiView } from "moti";
import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import Animated, {
  FadeInRight,
  FadeOutRight,
  LinearTransition,
} from "react-native-reanimated";
import SignUpTabIcon from "./SignUpTabIcon";
import { icons } from "lucide-react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type IconNames = keyof typeof icons;

export type TabItem = {
  icon: IconNames;
  label: string;
};

interface TabsProps {
  data: TabItem[];
  selectedIndex: number;
  onChange: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
}
const _spacing = 4;

const SignUpTabs = ({
  data,
  selectedIndex,
  onChange,
  activeBackgroundColor = Colors.black,
  inactiveBackgroundColor = Colors.lightYellow,
  inactiveColor = Colors.gray,
  activeColor = Colors.white,
}: TabsProps) => {
  const router = useRouter();
  return (
    <View style={{ flexDirection: "row", gap: _spacing, marginBottom: 10 }}>
      <View
        style={{ marginRight: 20, marginTop: "auto", marginBottom: "auto" }}
      >
        <FontAwesome5
          name="arrow-circle-left"
          size={28}
          color={Colors.black}
          onPress={() => router.back()}
        />
      </View>
      {data.map((item, index) => {
        const isSelected = index === selectedIndex;
        return (
          <MotiView
            key={index}
            animate={{
              borderRadius: 12,
              overflow: "hidden",
              backgroundColor: isSelected
                ? activeBackgroundColor
                : inactiveBackgroundColor,
            }}
            layout={LinearTransition.springify().stiffness(200).damping(80)}
          >
            <Pressable
              onPress={() => onChange(index)}
              style={{
                padding: _spacing * 3,
                justifyContent: "center",
                alignItems: "center",
                gap: _spacing,
                flexDirection: "row",
              }}
            >
              {isSelected && (
                <Animated.Text
                  entering={FadeInRight.springify().damping(80).stiffness(200)}
                  exiting={FadeOutRight.springify().damping(80).stiffness(200)}
                  style={{
                    fontFamily: "shortStack",
                    color: isSelected ? activeColor : inactiveColor,
                  }}
                >
                  {item.label}
                </Animated.Text>
              )}
              <SignUpTabIcon
                name={item.icon}
                animate={{ color: isSelected ? activeColor : inactiveColor }}
              />
            </Pressable>
          </MotiView>
        );
      })}
    </View>
  );
};

export default SignUpTabs;

const styles = StyleSheet.create({});
