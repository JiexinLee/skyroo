import { useAuthActions } from "@convex-dev/auth/react";
import Navigate from "../Navigate";
import { TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function SignOut() {
  const { signOut } = useAuthActions();
  const onSignOut = () => {
    signOut();
  };
  return (
    <View style={{ marginTop: 200 }}>
      <TouchableOpacity onPress={onSignOut}>
        <AntDesign name="logout" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
