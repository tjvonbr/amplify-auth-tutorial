import * as React from "react";
import { View, Text } from "react-native";
import CustomInput from "../../../components/CustomInput";
import styles from "../RegisterStyles";

type RegisterEmailProps = {
  email: string;
  handleEmailChange: (email: string) => void;
};

const RegisterEmail = ({ email, handleEmailChange }: RegisterEmailProps) => {
  return (
    <View style={styles.contentContainer}>
      <View style={{ margin: 10 }}>
        <Text style={styles.title}>Enter your email</Text>
        <Text style={styles.subtitle}>
          Which email address would you like to sign up with?
        </Text>
      </View>
      <View>
        <CustomInput
          style={styles.input}
          value={email}
          onChangeText={handleEmailChange}
          placeholder={"Email"}
          multiline={false}
          keyboardType={"default"}
          returnKeyType={"done"}
          autoCapitalize={"none"}
        />
      </View>
    </View>
  );
};

export default RegisterEmail;
