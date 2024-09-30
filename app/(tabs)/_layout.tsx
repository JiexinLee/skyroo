import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../../components/tabBar/TabBar";
import { useFrozen } from "../../context/freez-context";

export default function TabLayout() {
  const { isWaiting } = useFrozen();
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => (isWaiting ? <></> : <TabBar {...props} />)}
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
