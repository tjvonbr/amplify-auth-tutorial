import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const StatsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Stats</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 0.95,
    width: "90%",
  },
  header: {
    fontSize: 21,
    fontWeight: "700",
    color: "black",
  },
});

export default StatsScreen;
