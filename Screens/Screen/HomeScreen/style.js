import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import color from "../colors";
const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  forFindingArea: {
    height: width / 8,
    width: (width * 94) / 100,
    backgroundColor: "white",
    marginLeft: "3%",
    marginTop: "5%",
    flexDirection: "row",
  },
  forFindingInput: {
    color: color.dark_brown,
    borderBottomColor: color.dark_brown,
    borderBottomWidth: 2,
    width: (width * 60) / 100,
    height: (width * 10) / 100,
    marginTop: (width * 1) / 100,
    marginLeft: "5%",
  },
  forUserIcon: {
    marginTop: (width * 2) / 100,
    marginLeft: "5%",
    height: (width * 10) / 100,
    width: (width * 10) / 100,
    resizeMode: "stretch",
  },
  forSearchIcon: {
    marginTop: "20%",
    marginLeft: "10%",
    height: (width * 5) / 100,
    width: (width * 5) / 100,
    resizeMode: "stretch",
  },
  forBannerContainer: {
    marginTop: "8%",
    width: width,
    height: (width * 40) / 100,
  },
  forBanner: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  forCategoryContainer: {
    width: width,
    height: (width * 50) / 100,
  },
  forCategory1Container: {
    width: width,
    height: (width * 25) / 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  forCategory2Container: {
    width: width,
    height: (width * 15) / 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  forCatgory1: {
    width: "18%",
    height: "80%",
  },
  forCatgory2: {
    width: "13%",
    height: "90%",
  },
  forIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  forHotProductArea: {
    width: width,
  },
  forHottile: {
    marginLeft: "10%",
    width: "80%",
    height: 50,
    resizeMode: "stretch",
  },
  forHotProductsContainer: {},
  forHotProductContainer: {
    marginBottom: 20,
    marginLeft: "10%",
    width: "90%",
    height: 120,
    resizeMode: "stretch",
    flexDirection: "row",
  },
  forHotProductImage: {
    top: "6%",
    marginLeft: "5%",
    width: "40%",
    height: "80%",
  },
  forHotProductInfo: {
    width: "40%",
    height: "80%",
    marginLeft: "5%",
    top: "6%",
  },
  forHotProductName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  forHotProductPrice: {
    fontSize: 12,
    fontWeight: "bold",
  },
  forHotProductDescription: {
    fontSize: 12,
  },
});

export default styles;
