import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  textContainer: {
    flex: 1,
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    color: colors.black,
    fontWeight: "600",
    fontSize: 24,
  },
  subtitle: {
    textAlign: "center",
    color: colors.black,
    fontWeight: "500",
    fontSize: 15,
  },
  btnContainer: {
    flex: 1,
    width: "90%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default styles;
