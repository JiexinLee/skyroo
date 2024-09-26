import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Redirect } from "expo-router";
import { SignOut } from "../components/auth/SignOut";
import Loading from "../components/Loading";
import OnBoardingScreen from "../components/onBoarding/OnBoardingScreen";

export default function Index() {
  return (
    <>
      <AuthLoading>
        <Loading />
      </AuthLoading>
      <Unauthenticated>
        <OnBoardingScreen />
      </Unauthenticated>
      <Authenticated>
        <SignOut />
        <Redirect href="/home" />;
      </Authenticated>
    </>
  );
}
