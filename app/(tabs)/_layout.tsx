import React from "react";
import { Tabs } from "expo-router";
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
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "Msg",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Me",
        }}
      />
    </Tabs>
  );
}
