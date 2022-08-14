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
  forFindingArea: {
    height: width / 8,
    width: (width * 94) / 100,
    backgroundColor: "white",
    marginLeft: (width * 5) / 100,
    marginTop: "5%",
    flexDirection: "row",
  },
  forFindingInput: {
    color: color.dark_brown,
    borderBottomColor: color.dark_brown,
    borderBottomWidth: 2,
    width: (width * 70) / 100,
    height: (width * 10) / 100,
    marginTop: (width * 1) / 100,
    marginLeft: "0%",
    fontSize: width / 20,
  },
  forUserIcon: {
    marginTop: (width * 2) / 100,
    marginLeft: "20%",
    height: (width * 10) / 100,
    width: (width * 10) / 100,
    resizeMode: "stretch",
  },
  forSearchIcon: {
    marginTop: "55%",
    marginLeft: "10%",
    height: (width * 5) / 100,
    width: (width * 5) / 100,
    resizeMode: "stretch",
  },
  forNumberofResult: {
    marginTop: (width * 5) / 100,
    marginLeft: (width * 2) / 100,
    marginTop: (width * 2) / 100,
    fontSize: width / 25,
    color: color.yellow,
  },
  forLine: {
    width: (width * 94) / 100,
    marginLeft: (width * 3) / 100,
    height: 2,
    resizeMode: "stretch",
  },
  forResultArea: {
    marginTop: (width * 5) / 100,
    width: width,
  },
  forResultContainer: { width: width },
  forFindingProductContainer: {
    marginBottom: 20,
    marginLeft: (width * 5) / 100,
    width: (width * 90) / 100,
    height: width / 4,
    resizeMode: "stretch",
    flexDirection: "row",
  },
  forFindingProductImage: {
    top: "4%",
    marginLeft: "5%",
    width: "40%",
    height: "80%",
  },
  forFindingProductInfo: {
    width: "40%",
    height: "80%",
    marginLeft: "5%",
    top: "4%",
  },
  forFindingProductName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  forFindingProductPrice: {
    fontSize: 12,
    fontWeight: "bold",
  },
  forFindingProductDescription: {
    fontSize: 12,
  },
});

export default styles;
