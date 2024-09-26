import { useFonts } from "expo-font";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

export default function RootLayout() {
  useFonts({
    shortStack: require("./../assets/fonts/ShortStack-Regular.ttf"),
  });
  return (
    <ConvexAuthProvider client={convex} storage={secureStorage}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ConvexAuthProvider>
  );
}
