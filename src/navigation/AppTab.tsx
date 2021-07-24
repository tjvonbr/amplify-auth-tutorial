import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalendarScreen from "../screens/calendar/CalendarStack";
import DashboardScreen from "../screens/calendar/CalendarStack";
import StatsScreen from "../screens/statistics/StatsScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import Icon from "react-native-vector-icons/MaterialIcons";

const AppTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = "home";
          } else if (route.name === "Calendar") {
            iconName = "event";
          } else if (route.name === "Profile") {
            iconName = "person";
          } else {
            iconName = "leaderboard";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppTab;
