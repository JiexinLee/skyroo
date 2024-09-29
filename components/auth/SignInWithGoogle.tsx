import { useAuthActions } from "@convex-dev/auth/react";
import { AntDesign } from "@expo/vector-icons";
import { makeRedirectUri } from "expo-auth-session";
import { openAuthSessionAsync } from "expo-web-browser";
import { Platform } from "react-native";
import { Colors } from "../../constants/Colors";
import Button from "../Button";

const redirectTo = makeRedirectUri({
  scheme: "skyroo-app",
  preferLocalhost: true,
  isTripleSlashed: true,
});

const SignInWithGoogle = () => {
  const { signIn } = useAuthActions();
  const handleSignIn = async () => {
    const { redirect } = await signIn("google", { redirectTo });
    if (Platform.OS === "web") {
      return;
    }
    const result = await openAuthSessionAsync(redirect!.toString(), redirectTo);
    if (result.type === "success") {
      const { url } = result;
      const code = new URL(url).searchParams.get("code")!;
      await signIn("google", { code });
    }
  };
  return (
    <Button
      fontSize={18}
      title="Sign up with Google"
      onPress={handleSignIn}
      size="80%"
      endIcon={<AntDesign name="google" size={24} color={Colors.white} />}
    />
  );
};

export default SignInWithGoogle;
