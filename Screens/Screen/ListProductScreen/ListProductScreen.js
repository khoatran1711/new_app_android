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

import imagebackground from './../../Pictures/background.png';
import usericon from './../../Pictures/user_icon.png';
import searchicon from './../../Pictures/search_icon.png';
import line from './../../Pictures/product_background.png';
import productbackground from './../../Pictures/product_background.png';
import testproduct from './../../Pictures/test_product.png';
import lefticon from './../../Pictures/left_icon.png';

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
                <View
                  style={styles.forResultContainer}
                  key={product.id_product}>
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
                          {product.name_product}
                        </Text>
                        <Text style={styles.forFindingProductPrice}>
                          $ {product.price_product}
                        </Text>
                        <Text
                          style={styles.forFindingProductDescription}
                          numberOfLines={3}>
                          {product.product_description}
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
