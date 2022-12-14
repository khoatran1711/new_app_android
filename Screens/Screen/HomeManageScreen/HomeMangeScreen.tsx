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
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './style';
import color from '../colors';
//test
import {UseGetAllProduct} from '../../../Data_query/Query.queries';

const imagebackground = require('./../../Pictures/background.png');
const testproduct = require('./../../Pictures/test_product.png');
const productbackground = require('./../../Pictures/product_background.png');

const HomeMangeScreen = ({navigation}: {navigation: any}) => {
  //test
  var getproduct = UseGetAllProduct(navigation) as any[];
  var listProduct = getproduct;
  const [finding_text, setFinding_text] = useState('');

  var list_filter_product: Array<any>;
  function filter(text: string) {
    if (getproduct.length > 0) {
      for (let i = 0; i < getproduct.length; i++) {
        if (
          getproduct[i].nameProduct.toLowerCase().includes(text.toLowerCase())
        ) {
          var add_product = getproduct[i];
          list_filter_product.push(add_product);
        }
      }
    }
    console.log(list_filter_product.length);
    listProduct = list_filter_product;
    navigation.navigate('ListProduct', list_filter_product);
  }

  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <ScrollView>
        <TouchableOpacity style={styles.forButton}>
          <Text
            style={styles.forTextInOpaTouch}
            onPress={() => navigation.navigate('Adding')}>
            New Product
          </Text>
        </TouchableOpacity>
        <View style={styles.forFindingProductContainer}>
          <TextInput
            placeholder="Find your Product"
            onChangeText={new_text => setFinding_text(new_text)}
            placeholderTextColor={color.yellow}
            style={styles.forInputProduct}></TextInput>
          <TouchableOpacity
            style={styles.forInputProductButton}
            onPress={() => filter(finding_text)}>
            <Text style={styles.forTextInOpaTouch}>Find</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forProductListContainer}>
          <Text style={styles.forProductListTitle}>Product List</Text>
          <View style={styles.forProductArea}>
            {listProduct.length > 0 ? (
              listProduct.map(product => (
                <View style={styles.forResultContainer} key={product.idProduct}>
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

export default HomeMangeScreen;
