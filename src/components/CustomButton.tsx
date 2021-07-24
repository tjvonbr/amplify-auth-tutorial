import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors";

type CustomButtonProps = {
  backgroundColor: string;
  btnText: string;
  color: string;
  handlePress: any;
};

const CustomButton = ({
  backgroundColor,
  btnText,
  color,
  handlePress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.base, { backgroundColor }]}
      onPress={handlePress}>
      <Text style={[styles.baseText, { color }]}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: colors.blue09,
  },
  baseText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
  },
});

export default CustomButton;
