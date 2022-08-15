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
  forChaningImage: {
    marginTop: "5%",
    width: (width * 80) / 100,
    height: (width * 60) / 100,
    resizeMode: "stretch",
    marginLeft: (width * 10) / 100,
  },
  forAddingInput: {
    textAlign: "center",
    fontSize: (width * 6) / 100,
    color: color.yellow,
    marginTop: "5%",
  },
  forButton: {
    marginTop: "5%",
    width: (width * 40) / 100,
    backgroundColor: color.yellow,
    marginLeft: (width * 30) / 100,
    borderRadius: 20,
    padding: 10,
  },
  forTextInOpaTouch: {
    textAlign: "center",
  },
});
export default styles;
