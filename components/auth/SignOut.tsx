import { useAuthActions } from "@convex-dev/auth/react";
import Navigate from "../Navigate";
import { Pressable, View, Text } from "react-native";

export function SignOut() {
  const { signOut } = useAuthActions();
  const onSignOut = () => {
    signOut();
  };
  return (
    <View style={{ marginTop: 200 }}>
      <Pressable onPress={onSignOut}>
        <Text>Sign Out</Text>
      </Pressable>
      {/* <Navigate title="Sign Out" navigateTo="/" onPress={onSignOut} />; */}
    </View>
  );
}
