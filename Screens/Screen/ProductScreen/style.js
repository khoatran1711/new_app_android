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
  forProductName: {
    marginTop: (width * 0) / 100,
    textAlign: "center",
    width: width,
    fontSize: (width * 8) / 100,
    color: color.yellow,
  },
  forProductImage: {
    marginTop: (width * 0) / 100,
    marginLeft: (width * 10) / 100,
    width: (width * 80) / 100,
    height: (width * 50) / 100,
  },
  forProductPrice: {
    marginTop: (width * 6) / 100,
    textAlign: "center",
    width: width,
    fontSize: (width * 6) / 100,
    color: color.yellow,
  },
  forProductDesciption: {
    marginLeft: (width * 5) / 100,
    marginTop: (width * 5) / 100,
    textAlign: "center",
    width: (width * 90) / 100,
    fontSize: (width * 6) / 100,
    color: color.yellow,
  },
});

export default styles;
