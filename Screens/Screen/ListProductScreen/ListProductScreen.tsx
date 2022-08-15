import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import react from 'react';
import {StatusBar} from 'react-native';
import {Button, StyleSheet, TextInput, Platform} from 'react-native';
import {Image, Text, View} from 'react-native';

import color from '../colors';
import {Touchable, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './style';

const imagebackground = require('./../../Pictures/background.png');
const productbackground = require('./../../Pictures/product_background.png');
const lefticon = require('./../../Pictures/left_icon.png');

const ListProductScreen = ({route, navigation}) => {
  var listProduct = route.params;
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
        <View style={styles.forProductListContainer}>
          <Text style={styles.forProductListTitle}>Product List</Text>
          <View style={styles.forProductArea}>
            {listProduct.length > 0 ? (
              listProduct.map(product => (
                <View key={product.idProduct}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Changing', product)}>
                    <ImageBackground
                      source={productbackground}
                      style={styles.forFindingProductContainer}>
                      <Image
                        source={{uri: product.imagedata}}
                        style={styles.forFindingProductImage}></Image>
                      <View style={styles.forFindingProductInfo}>
                        <Text style={styles.forFindingProductName}>
                          {product.nameProduct}
                        </Text>
                        <Text style={styles.forFindingProductPrice}>
                          $ {product.priceProduct}
                        </Text>
                        <Text
                          style={styles.forFindingProductDescription}
                          numberOfLines={3}>
                          {product.productDescription}
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text>""</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ListProductScreen;
