import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import TabBar from "../../components/tabBar/TabBar";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          //   tabBarIcon: ({ color }) => (
          //     <Ionicons name="home" size={24} color={color} />
          //   ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          //   tabBarIcon: ({ color }) => (
          //     <MaterialIcons name="explore" size={24} color={color} />
          //   ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "Messages",
          //   tabBarIcon: ({ color }) => (
          //     <AntDesign name="message1" size={22} color={color} />
          //   ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          //   tabBarIcon: ({ color }) => (
          //     <Ionicons name="person" size={22} color={color} />
          //   ),
        }}
      />
    </Tabs>
  );
}
