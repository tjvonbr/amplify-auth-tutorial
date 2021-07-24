import * as React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type CustomIconButtonType = {
  name: string;
  color: string;
  handlePress: () => void;
};

const CustomIconButton = ({ name, color, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name={name} color={color} size={30} />
    </TouchableOpacity>
  );
};

export default CustomIconButton;
