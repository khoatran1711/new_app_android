import react from "react";
import { Dimensions, ScrollView, StatusBar } from "react-native";
import { Button, StyleSheet, TextInput, Platform } from "react-native";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import color from "../colors";
import { Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style";

import imagebackground from "./../../Pictures/background.png";
import lefticon from "./../../Pictures/left_icon.png";
import testproduct from "./../../Pictures/test_product.png";

const width = Dimensions.get("screen").width;

const ProductScreen = ({ route, navigation }) => {
  var product = route.params;
  console.log(product);
  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: "100%",
        height: "100%",
        alignSelf: "flex-start",
        position: "absolute",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
      }}
    >
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={lefticon} style={styles.forLeftIcon}></Image>
        </TouchableOpacity>
        <Text style={styles.forProductName}>{product.name_product}</Text>
        <Image
          style={styles.forProductImage}
          source={{ uri: product.imagedata }}
        ></Image>
        <Text style={styles.forProductPrice}> $ {product.price_product}</Text>
        <Text style={styles.forProductDesciption}>
          {" "}
          {product.description_product}{" "}
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default ProductScreen;
