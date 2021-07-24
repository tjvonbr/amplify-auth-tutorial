import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import styles from "./LandingStyles";
import { colors } from "../../styles/colors";

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Whiteboard</Text>
        <Text style={styles.subtitle}>
          Start tracking your progress in the gym hassle-free
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          backgroundColor={colors.blue09}
          btnText={"Sign up"}
          color={colors.white}
          handlePress={() => navigation.navigate("Register")}
        />
        <CustomButton
          backgroundColor={colors.white}
          btnText={"Login"}
          color={colors.blue09}
          handlePress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
