import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomNavHeader from "../../components/CustomNavHeader";
import RegisterName from "./components/RegisterName";
import RegisterEmail from "./components/RegisterEmail";
import RegisterPassword from "./components/RegisterPassword";
import styles from "./RegisterStyles";
import { colors } from "../../styles/colors";

const RegisterScreen = ({ navigation }) => {
  const [step, setStep] = React.useState(1);
  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const toLanding = () => navigation.navigate("Landing");

  // Handles moving forward and back within registration form
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleName = (name: string): void => setFirstName(name);
  const handleEmail = (email: string): void => setEmail(email);
  const handlePassword = (password: string): void => setPassword(password);

  const signUp = () => console.log("Placeholder for sign up functionality!");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <RegisterName firstName={firstName} handleTextChange={handleName} />
        );
      case 2:
        return <RegisterEmail email={email} handleEmailChange={handleEmail} />;
      case 3:
        return (
          <RegisterPassword
            password={password}
            handlePasswordChange={handlePassword}
          />
        );
      default:
        return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <CustomNavHeader
          iconName={step === 1 ? "close" : "keyboard-backspace"}
          handlePress={step === 1 ? toLanding : prevStep}
        />
        {renderStep()}
        <View style={styles.btnContainer}>
          <CustomButton
            backgroundColor={colors.blue09}
            btnText={step != 3 ? "Continue" : "Submit"}
            color={colors.white}
            handlePress={step != 3 ? nextStep : signUp}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
