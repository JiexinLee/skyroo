import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import Google from "@auth/core/providers/google";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [Password, Google],
});
