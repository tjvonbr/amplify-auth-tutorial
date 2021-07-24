import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  keyboardView: {
    flex: 1,
    width: "90%",
  },
  customHeader: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },
  contentContainer: {
    flex: 3,
    width: "100%",
    alignItems: "flex-start",
  },
  title: {
    marginBottom: 10,
    color: colors.black,
    fontWeight: "700",
    fontSize: 28,
  },
  subtitle: {
    marginBottom: 25,
    color: "gray",
    fontWeight: "500",
    fontSize: 15,
  },
  btnContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  input: {
    width: "100%",
    marginBottom: 20,
    padding: 10,
    color: colors.black,
    fontSize: 15,
    borderColor: colors.inputBorderGray,
    borderWidth: 2,
    borderRadius: 7,
  },
});

export default styles;
