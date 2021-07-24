import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors } from "../styles/colors";

const CustomInput = ({
  style,
  value,
  onChangeText,
  placeholder,
  autoCapitalize,
  multiline,
  keyboardType,
  returnKeyType,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <TextInput
      style={[style, isFocused ? styles.focusedInput : styles.unfocusedInput]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      multiline={multiline}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  focusedInput: {
    borderColor: colors.blue09,
    shadowColor: colors.blue09,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  unfocusedInput: { borderColor: colors.inputBorderGray },
});

export default CustomInput;
