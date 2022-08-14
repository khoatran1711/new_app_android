import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import color from "../colors";
const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  forLeftIcon: {
    marginLeft: (width * 3) / 100,
    marginTop: (width * 3) / 100,
    width: (width * 7) / 100,
    height: (width * 7) / 100,
    resizeMode: "stretch",
  },
  forHelloBanner: {
    marginLeft: (width * 25) / 100,
    width: (width * 50) / 100,
    height: (width * 50) / 100,
    resizeMode: "stretch",
  },
  forWelcomeTitle: {
    textAlign: "center",
    fontSize: (width * 5) / 100,
    color: color.yellow,
  },
  forUserInfoTitle: {
    marginTop: (width * 2) / 100,
    textAlign: "center",
    fontSize: (width * 5) / 100,
    color: color.yellow,
  },
  forUserInputInfo: {
    marginTop: (width * 1) / 100,
    textAlign: "center",
    fontSize: (width * 5) / 100,
    color: color.yellow,
    marginLeft: (width * 10) / 100,
    width: (width * 80) / 100,
    borderBottomWidth: 2,
    borderBottomColor: color.yellow,
  },
  forButtonChange: {
    marginTop: (width * 10) / 100,
    borderRadius: 10,
    marginLeft: (width * 40) / 100,
    backgroundColor: color.yellow,
    width: (width * 20) / 100,
    height: (width * 8) / 100,
  },
});

export default styles;
