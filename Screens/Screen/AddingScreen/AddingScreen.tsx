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

import {UsePostProduct} from '../../../Data_query/Query.queries';

const imagebackground = require('./../../Pictures/background.png');
const lefticon = require('./../../Pictures/left_icon.png');

var product = {
  idProduct: '',
  nameProduct: '',
  priceProduct: 0,
  descriptionProduct: '',
  categoryProduct: '',
  imagedata: '',
};

let options = {
  title: 'Select Image',
  customButtons: [
    {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */

const AddingScreen = ({navigation}) => {
  const myPostProduct = UsePostProduct(navigation);
  const [image, setImage] = useState(null);
  const [id_text, setID_text] = useState('');
  const [name_text, setName_text] = useState('');
  const [price_text, setPrice_value] = useState(0);
  const [description_text, setDescription_text] = useState('');
  const [category_text, setCategory_text] = useState('');

  function ChangeID(new_text) {
    setID_text(new_text);
    product.idProduct = new_text;
    global.addingproduct = product;
  }

  function ChangeName(new_text) {
    setName_text(new_text);
    product.nameProduct = new_text;
    global.addingproduct = product;
  }

  function ChangePrice(new_text) {
    var new_value = parseInt(new_text);
    setPrice_value(new_value);
    product.priceProduct = new_value;
    global.adding_product = product;
  }

  function ChangeDescription(new_text) {
    setDescription_text(new_text);
    product.descriptionProduct = new_text;
    global.addingproduct = product;
  }

  function ChangeCategory(new_text) {
    setCategory_text(new_text);
    product.categoryProduct = new_text;
    global.addingproduct = product;
  }

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
      console.log('response', response.assets[0].uri);

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
        console.log('myimageuri', image);
      }
    });
  };

  function showimage() {
    console.log('myimage', image);
  }

  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={lefticon} style={styles.forLeftIcon}></Image>
        </TouchableOpacity>
        <TextInput
          style={styles.forAddingInput}
          placeholder="ID"
          placeholderTextColor={color.yellow}
          onChangeText={ChangeID}></TextInput>
        <TextInput
          style={styles.forAddingInput}
          placeholder="Name"
          placeholderTextColor={color.yellow}
          onChangeText={ChangeName}></TextInput>
        <TextInput
          style={styles.forAddingInput}
          placeholder="Price"
          placeholderTextColor={color.yellow}
          onChangeText={ChangePrice}></TextInput>
        <TextInput
          style={styles.forAddingInput}
          placeholder="Description Description Description Description "
          placeholderTextColor={color.yellow}
          onChangeText={ChangeDescription}></TextInput>
        <TextInput
          style={styles.forAddingInput}
          placeholder="Category"
          placeholderTextColor={color.yellow}
          onChangeText={ChangeCategory}></TextInput>
        <TouchableOpacity style={styles.forButton} onPress={launchImageLibrary}>
          <Text style={styles.forTextInOpaTouch}>Upload Image</Text>
        </TouchableOpacity>
        {image && (
          <Image source={{uri: image}} style={styles.forChaningImage} />
        )}
        {myPostProduct}
      </ScrollView>
    </ImageBackground>
  );
};

export default AddingScreen;
