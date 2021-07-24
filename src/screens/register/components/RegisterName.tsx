import * as React from "react";
import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import CustomInput from "../../../components/CustomInput";
import styles from "../RegisterStyles";

type RegisterNameProps = {
  firstName: string;
  handleTextChange: (name: string) => void;
};

const RegisterName = ({ firstName, handleTextChange }: RegisterNameProps) => {
  return (
    <View style={styles.contentContainer}>
      <View style={{ margin: 10 }}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>What should we call you?</Text>
      </View>
      <View>
        <CustomInput
          style={styles.input}
          value={firstName}
          onChangeText={handleTextChange}
          placeholder={"First name"}
          multiline={false}
          keyboardType={"default"}
          returnKeyType={"done"}
        />
      </View>
    </View>
  );
};

export default RegisterName;
