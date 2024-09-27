import { AuthLoading, Unauthenticated } from "convex/react";
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
    </>
  );
}
