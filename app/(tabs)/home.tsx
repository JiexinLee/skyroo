import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { SignOut } from "../../components/auth/SignOut";
import Button from "../../components/Button";
import Modal from "../../components/modal/Modal";

const HomeScreen = () => {
  const [loading, setLoading] = React.useState(false);
  return (
    <View style={styles.container}>
      <Modal
        onClose={() => setLoading(false)}
        show={loading}
        closeButton
        content={<Text>Nothing but modal</Text>}
      />
      <Button title="Open loading" onPress={() => setLoading(true)} />
      <SignOut />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
});
