import React from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import TabBarButton from "./TabBarButton";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const [dimensions, setDimensions] = React.useState({
    width: 100,
    height: 20,
  });

  const buttonWidth = dimensions.width / state.routes.length;

  const onTabBarLayout = (event: LayoutChangeEvent) => {
    setDimensions({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.height,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });
  const getIcon = (name: string, isFocusing: string): React.ReactElement => {
    switch (name) {
      case "home":
        return (
          <Feather
            name="home"
            size={24}
            color={isFocusing === "home" ? "#fff" : "#222"}
          />
        );
      case "explore":
        return (
          <Feather
            name="compass"
            size={24}
            color={isFocusing === "explore" ? "#fff" : "#222"}
          />
        );
      case "message":
        return (
          <Feather
            name="message-circle"
            size={24}
            color={isFocusing === "message" ? "#fff" : "#222"}
          />
        );
      case "profile":
        return (
          <Feather
            name="user"
            size={24}
            color={isFocusing === "profile" ? "#fff" : "#222"}
          />
        );

      default:
        return <></>;
    }
  };
  return (
    <View onLayout={onTabBarLayout} style={[styles.tabBar]}>
      <Animated.View
        style={[
          animatedStyle,
          {
            position: "absolute",
            backgroundColor: "#673ab7",
            borderRadius: 30,
            marginHorizontal: 10,
            width: buttonWidth - 18,
            height: dimensions.height - 15,
          },
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === "string"
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {
            duration: 2500,
          });
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            icon={getIcon(route.name, isFocused ? route.name : "")}
            label={label}
            color={isFocused ? "#673ab7" : "#222"}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    width: "80%",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: "12.5%",
    paddingVertical: 15,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});
