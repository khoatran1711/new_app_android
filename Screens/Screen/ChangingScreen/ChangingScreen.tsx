import react from 'react';
import React from 'react';
import {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Button, StyleSheet, TextInput, Platform} from 'react-native';
import {Image, Text, View} from 'react-native';
import {ImageBackground} from 'react-native';
import {ScrollView} from 'react-native';
import {Touchable, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {launchImageLibrary, MediaType} from 'react-native-image-picker';
import styles from './style';
import color from '../colors';
import * as ImagePicker from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';

import {UsePutProduct} from '../../../Data_query/Query.queries';
import {UseGetAProduct} from '../../../Data_query/Query.queries';
import {UseDeleteProduct} from '../../../Data_query/Query.queries';

const imagebackground = require('./../../Pictures/background.png');
const lefticon = require('./../../Pictures/left_icon.png');

const ChangingScreen = ({route, navigation}) => {
  const product_id = route.params.idProduct;
  const product = UseGetAProduct(product_id) as any;
  global.changingproduct = product;
  const old_product = UseGetAProduct(product_id);
  const [image, setImage] = useState(null);
  const [name_text, setName_text] = useState(product.nameProduct);
  const [price_text, setPrice_value] = useState(product.priceProduct);
  const [description_text, setDescription_text] = useState(
    product.descriptionProduct,
  );
  const [category_text, setCategory_text] = useState(product.categoryProduct);

  function ChangeName(new_text) {
    setName_text(new_text);
    product.nameProduct = new_text;
    global.changingproduct = product;
  }

  function ChangePrice(new_text) {
    var new_value = parseInt(new_text);
    setPrice_value(new_value);
    product.priceProduct = new_value;
    global.changing_product = product;
  }

  function ChangeDescription(new_text) {
    setDescription_text(new_text);
    product.descriptionProduct = new_text;
    global.changingproduct = product;
  }

  function ChangeCategory(new_text) {
    setCategory_text(new_text);
    product.descriptionProduct = new_text;
    global.changingproduct = product;
  }

  const putProduct = UsePutProduct(navigation);
  const deleteProduct = UseDeleteProduct(navigation);

  const launchImageLibrary = () => {
    let options = {
      mediaType: 'photo' as MediaType,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        ImgToBase64.getBase64String(response.assets[0].uri)
          .then(base64String => {
            setImage(
              'data:' + response.assets[0].type + ';base64,' + base64String,
            );
            product.imagedata =
              'data:' + response.assets[0].type + ';base64,' + base64String;
            global.addingproduct = product;
          })
          .catch(err => console.log(err));
      }
    });
  };
  console.log('change this product', product);

  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            console.log('my_old_product', old_product);
            global.changingproduct = old_product;
            console.log('my_global', global.changingproduct);
            navigation.goBack();
          }}>
          <Image source={lefticon} style={styles.forLeftIcon}></Image>
        </TouchableOpacity>
        <TextInput
          style={styles.forChangingInput}
          value={product.idProduct}></TextInput>
        <TextInput
          style={styles.forChangingInput}
          placeholder="Name"
          placeholderTextColor={color.yellow}
          defaultValue={product.nameProduct}
          onChangeText={ChangeName}></TextInput>
        <TextInput
          style={styles.forChangingInput}
          placeholder="Price"
          placeholderTextColor={color.yellow}
          defaultValue={
            product.priceProduct ? product.priceProduct.toString() : 'Price'
          }
          onChangeText={ChangePrice}></TextInput>
        <TextInput
          style={styles.forChangingInput}
          placeholder="Description Description Description Description "
          placeholderTextColor={color.yellow}
          defaultValue={product.descriptionProduct}
          onChangeText={ChangeDescription}></TextInput>
        <TextInput
          style={styles.forChangingInput}
          placeholder="Category"
          placeholderTextColor={color.yellow}
          defaultValue={product.categoryProduct}
          onChangeText={ChangeCategory}></TextInput>
        <TouchableOpacity style={styles.forButton} onPress={launchImageLibrary}>
          <Text style={styles.forTextInOpaTouch}>Upload Image</Text>
        </TouchableOpacity>
        {
          <Image
            source={{uri: image ? image : product.imagedata}}
            style={styles.forChaningImage}
          />
        }
        {putProduct}
        {deleteProduct}
      </ScrollView>
    </ImageBackground>
  );
};

export default ChangingScreen;
