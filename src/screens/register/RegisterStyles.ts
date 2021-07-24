import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    width: "90%",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "black",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "gray",
    marginBottom: 20,
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
  btnContainer: {
    width: "90%",
    marginBottom: 25,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
});

export default styles;
