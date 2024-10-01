import React from "react";
import { MotiProps } from "moti";
import { motifySvg } from "moti/svg";
import { icons } from "lucide-react-native";

interface SignUpTabIconProps extends MotiProps {
  name: keyof typeof icons;
}
const SignUpTabIcon = ({ name, ...rest }: SignUpTabIconProps) => {
  const IconComponent = motifySvg(icons[name] as any)();
  return <IconComponent size={16} {...rest} />;
};

export default SignUpTabIcon;
