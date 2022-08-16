import react from 'react';
import {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableNativeFeedbackComponent,
  TouchableOpacity,
} from 'react-native';
import {Button, StyleSheet, TextInput, Platform} from 'react-native';
import {Image, Text, View} from 'react-native';
import {ImageBackground} from 'react-native';
import styles from './style';

import {UseGetCartByUser} from '../../../../Data_query/Query.queries';

import Product from './ProductInCart/Product';

const line = require('./../../../Pictures/product_background.png');

const Cart = () => {
  const myCart = UseGetCartByUser(global.account);
  return (
    <View>
      <Text style={styles.forNumberofProduct}>
        {' '}
        {myCart.length} products in your Cart
      </Text>
      <Image source={line} style={styles.forLine}></Image>
      <View style={styles.forProductArea}>
        <ScrollView>
          <View style={styles.forResultContainer}>
            {myCart.length > 0
              ? myCart.map(cart => <Product cart={cart} />)
              : null}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Cart;
