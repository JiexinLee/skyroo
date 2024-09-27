import { useFonts } from "expo-font";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCurrentUser } from "../hooks/useCurrentUser";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

const InitialLayout = () => {
  const router = useRouter();
  const { user, loadingUser } = useCurrentUser();
  const segments = useSegments();

  useEffect(() => {
    if (loadingUser) return;
    const isAuthGroup = segments[0] === ("(authenticated)" as string);

    if (user && !isAuthGroup) {
      router.replace("/(tabs)/home");
    } else if (!user) {
      router.replace("/");
    }
  }, [user]);

  if (loadingUser) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.black} />
      </View>
    );
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  useFonts({
    shortStack: require("./../assets/fonts/ShortStack-Regular.ttf"),
  });
  return (
    <ConvexAuthProvider client={convex} storage={secureStorage}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <InitialLayout />
      </GestureHandlerRootView>
    </ConvexAuthProvider>
  );
}
