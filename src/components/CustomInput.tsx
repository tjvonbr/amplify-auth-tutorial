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
  secureTextEntry,
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
      secureTextEntry={secureTextEntry}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  focusedInput: { borderColor: colors.blue09 },
  unfocusedInput: { borderColor: colors.inputBorderGray },
});

export default CustomInput;
