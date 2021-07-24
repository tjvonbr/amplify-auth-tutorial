import * as React from "react";
import { StyleSheet, View } from "react-native";
import CustomIconButton from "./CustomIconButton";

type CustomNavHeaderProps = {
  iconName: string;
  handlePress: () => void;
};

const CustomNavHeader = ({ iconName, handlePress }: CustomNavHeaderProps) => {
  return (
    <View style={styles.container}>
      <CustomIconButton
        name={iconName}
        color={"black"}
        handlePress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "90%",
    position: "relative",
    top: 10,
  },
});

export default CustomNavHeader;
