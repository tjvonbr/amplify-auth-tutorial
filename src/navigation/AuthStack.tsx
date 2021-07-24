import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/register/RegisterScreen";
import LandingScreen from "../screens/landing/LandingScreen";

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
