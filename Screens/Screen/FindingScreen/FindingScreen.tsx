import react from 'react';
import {Dimensions, ScrollView, StatusBar} from 'react-native';
import {Button, StyleSheet, TextInput, Platform} from 'react-native';
import {Image, Text, View} from 'react-native';
import {ImageBackground} from 'react-native';
import color from '../colors';
import {Touchable, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './style';

const imagebackground = require('./../../Pictures/background.png');

const line = require('./../../Pictures/product_background.png');
const productbackground = require('./../../Pictures/product_background.png');
const lefticon = require('./../../Pictures/left_icon.png');

const width = Dimensions.get('screen').width;
const FindingScreen = ({route, navigation}: {route: any; navigation: any}) => {
  var my_listproduct = route.params as any;
  console.log(my_listproduct.length);
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

        <Text style={styles.forNumberofResult}>
          {' '}
          {my_listproduct.length} result(s) are found
        </Text>
        <Image source={line} style={styles.forLine}></Image>
        <View style={styles.forResultArea}>
          {my_listproduct.length > 0 ? (
            my_listproduct.map(product => (
              <View style={styles.forResultContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Product', product)}>
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
                        {product.descriptionProduct}
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
      </ScrollView>
    </ImageBackground>
  );
};

export default FindingScreen;
