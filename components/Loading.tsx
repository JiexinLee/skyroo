import React from "react";
import Modal from "./modal/Modal";
import { Image } from "react-native";

interface LoadingProps {
  onClose?: () => void;
  duration?: number;
}
const Loading = ({ onClose, duration }: LoadingProps) => {
  const onClosePlaceHolder = () => {};
  return (
    <Modal
      label="Please wait ..."
      onClose={onClose || onClosePlaceHolder}
      show
      width="50%"
      height="20%"
      duration={duration}
      content={
        <Image
          source={require("../assets/images/rainbow.gif")}
          style={{ width: 130, height: 130 }}
        />
      }
    />
  );
};

export default Loading;
