import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomIconButton from "../../components/CustomIconButton";
import CustomInput from "../../components/CustomInput";
import styles from "./LoginStyles";
import { colors } from "../../styles/colors";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmail = (email: string): void => setEmail(email);
  const handlePassword = (password: string): void => setPassword(password);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.customHeader}>
          <CustomIconButton
            name={"close"}
            color={colors.black}
            handlePress={() => navigation.navigate("Landing")}
          />
        </View>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Sign in to record your last workout or check your progress!
        </Text>
        <CustomInput
          style={styles.input}
          value={email}
          onChangeText={handleEmail}
          placeholder="Email"
          returnKeyType={"next"}
          autoCapitalize="none"
        />
        <CustomInput
          style={styles.input}
          value={password}
          onChangeText={handlePassword}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <View style={styles.btnContainer}>
          <CustomButton
            backgroundColor={colors.blue09}
            btnText={"Login"}
            color={colors.white}
            handlePress={() => console.log("Sign in")}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
