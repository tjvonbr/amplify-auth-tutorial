import * as React from "react";
import { View, Text } from "react-native";
import CustomInput from "../../../components/CustomInput";
import styles from "../RegisterStyles";

type RegisterPasswordProps = {
  password: string;
  handlePasswordChange: (password: string) => void;
};

const RegisterPassword = ({
  password,
  handlePasswordChange,
}: RegisterPasswordProps) => {
  return (
    <View style={styles.contentContainer}>
      <View style={{ margin: 10 }}>
        <Text style={styles.title}>Create a password</Text>
        <Text style={styles.subtitle}>
          Please enter a safe, secure password
        </Text>
      </View>
      <View>
        <CustomInput
          style={styles.input}
          value={password}
          onChangeText={handlePasswordChange}
          placeholder={"Password"}
          multiline={false}
          keyboardType={"default"}
          returnKeyType={"done"}
          autoCapitalize={"none"}
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default RegisterPassword;
