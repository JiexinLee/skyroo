import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import Indicator from "./Indicator";
import Backdrop from "./Backdrop";
import Square from "./Square";
import { onBoardingData } from "../../constants/OnBoardingData";
import { Feather } from "@expo/vector-icons";
import Navigate from "../Navigate";

const { width, height } = Dimensions.get("screen");

const bgs = [
  Colors.lightIndigo,
  Colors.lightYellow,
  Colors.red,
  Colors.primary,
];

const OnBoardingScreen = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onSignIn = () => {
    console.log("sign in");
  };
  const onSignUp = () => {
    console.log("sign up");
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} backgroundColors={bgs} width={width} />
      <Square scrollX={scrollX} height={height} width={width} />
      <Animated.FlatList
        data={onBoardingData}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center", padding: 20 }}>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: "800",
                    fontSize: 24,
                    marginBottom: 10,
                    fontFamily: "shortStack",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: "300",
                    fontFamily: "shortStack",
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator
        scrollX={scrollX}
        dataAmount={onBoardingData.length}
        width={width}
      />
      <View style={{ position: "absolute", bottom: 50 }}>
        <Navigate
          navigateTo="/sign-in"
          title="Sign In"
          endIcon={
            <Feather name="arrow-right" size={24} color={Colors.white} />
          }
        />
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
});
