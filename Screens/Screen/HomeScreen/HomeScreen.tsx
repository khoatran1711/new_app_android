import react from 'react';
import {useState} from 'react';
import {Dimensions, ScrollView, StatusBar} from 'react-native';
import {Button, StyleSheet, TextInput, Platform} from 'react-native';
import {Image, Text, View} from 'react-native';
import {ImageBackground} from 'react-native';
import color from '../colors';
import {Touchable, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './style';
//test
import {UseGetAllProduct} from '../../../Data_query/Query.queries';

const imagebackground = require('./../../Pictures/background.png');
const usericon = require('./../../Pictures/user_icon.png');
const searchicon = require('./../../Pictures/search_icon.png');
const homebanner = require('./../../Pictures/home_banner.png');
const newicon = require('./../../Pictures/new_icon.png');
const hoticon = require('./../../Pictures/hot_icon.png');
const cakeicon = require('./../../Pictures/cake_icon.png');
const wineicon = require('./../../Pictures/wine_icon.png');
const dishicon = require('./../../Pictures/dish_icon.png');
const coffeeicon = require('./../../Pictures/coffee_icon.png');
const hottile = require('./../../Pictures/hot_title.png');
const productbackground = require('./../../Pictures/product_background.png');

const width = Dimensions.get('window').width;
const HomeScreen = ({navigation}: {navigation: any}) => {
  //test
  var listProduct: Array<any>;
  var listProduct = UseGetAllProduct(navigation) as any[];
  var getproduct: Array<any>;
  getproduct = listProduct;

  const [finding_text, setFinding_text] = useState('');

  function filter_catgory(category: string) {
    var list_filter_product: any[] = [];
    list_filter_product = [];
    if (getproduct.length > 0) {
      for (let i = 0; i < getproduct.length; i++) {
        if (
          getproduct[i].categoryProduct.toLowerCase() == category.toLowerCase()
        ) {
          var add_product = getproduct[i];
          list_filter_product.push(add_product);
        }
      }
    }
    console.log(list_filter_product.length);
    listProduct = list_filter_product;
    navigation.navigate('Finding', list_filter_product);
  }

  function filter(text: string) {
    var list_filter_product = [];
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
    navigation.navigate('Finding', list_filter_product);
  }

  //console.log('my products : ', listProduct);
  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <ScrollView>
        <View style={styles.forFindingArea}>
          <TouchableOpacity onPress={() => navigation.navigate('UserInfo')}>
            <Image source={usericon} style={styles.forUserIcon}></Image>
          </TouchableOpacity>
          <TextInput
            onChangeText={new_text => setFinding_text(new_text)}
            style={styles.forFindingInput}
            placeholder="Find your product"></TextInput>
          <TouchableOpacity onPress={() => filter(finding_text)}>
            <Image source={searchicon} style={styles.forSearchIcon}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.forBannerContainer}>
          <Image source={homebanner} style={styles.forBanner}></Image>
        </View>

        <View style={styles.forCategoryContainer}>
          <View style={styles.forCategory1Container}>
            <TouchableOpacity style={styles.forCatgory1}>
              <Image source={newicon} style={styles.forIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forCatgory1}>
              <Image source={hoticon} style={styles.forIcon}></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.forCategory2Container}>
            <TouchableOpacity
              style={styles.forCatgory2}
              onPress={() => filter_catgory('Cake')}>
              <Image source={cakeicon} style={styles.forIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forCatgory2}
              onPress={() => filter_catgory('Wine')}>
              <Image source={wineicon} style={styles.forIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forCatgory2}
              onPress={() => filter_catgory('Dish')}>
              <Image source={dishicon} style={styles.forIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forCatgory2}
              onPress={() => filter_catgory('Coffee')}>
              <Image source={coffeeicon} style={styles.forIcon}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.forHotProductArea}>
          <Image source={hottile} style={styles.forHottile}></Image>

          <View style={styles.forHotProductsContainer}>
            {listProduct.length > 0 ? (
              listProduct.map(product => (
                <TouchableOpacity
                  key={product.idProduct}
                  onPress={() => navigation.navigate('Product', product)}>
                  <ImageBackground
                    source={productbackground}
                    style={styles.forHotProductContainer}>
                    <Image
                      source={{uri: product.imagedata}}
                      style={styles.forHotProductImage}></Image>
                    <View style={styles.forHotProductInfo}>
                      <Text style={styles.forHotProductName}>
                        {product.nameProduct}
                      </Text>
                      <Text style={styles.forHotProductPrice}>
                        $ {product.priceProduct}
                      </Text>
                      <Text
                        style={styles.forHotProductDescription}
                        numberOfLines={3}>
                        {product.descriptionProduct}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))
            ) : (
              <Text>''</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
