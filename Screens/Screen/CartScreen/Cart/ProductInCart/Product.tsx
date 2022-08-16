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
import {Image, Text, View, Alert} from 'react-native';
import {ImageBackground} from 'react-native';
import styles from '../style';

import {UseGetAProduct} from '../../../../../Data_query/Query.queries';
import {UsePutProductToCart} from '../../../../../Data_query/Query.queries';
import {UseDeleteCart} from '../../../../../Data_query/Query.queries';

const add = require('../../../../Pictures/add.png');
const minus = require('../../../../Pictures/minus.png');
const test_product = require('../../../../Pictures/test_product.png');
const background_product = require('../../../../Pictures/product_background.png');

const Product = props => {
  const [amount, setAmount] = useState(props.cart.productAmount);
  const product = UseGetAProduct(props.cart.productID) as any;
  const usePutProductToCart = UsePutProductToCart(props.cart, amount);
  const useDeleteCart = UseDeleteCart(props.cart.cartID);

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return amount > 0 ? (
    <ImageBackground
      source={background_product}
      style={styles.forProductContainer}>
      <Image
        source={{uri: product.imagedata}}
        style={styles.forProductImage}></Image>
      <View style={styles.forProductInfo}>
        <Text style={styles.forProductName}>{product.nameProduct}</Text>
        <Text style={styles.forProductPrice}>{product.priceProduct} </Text>
        <View style={styles.forAmountProduct}>
          <TouchableOpacity
            onPress={() =>
              amount > 1 ? setAmount(amount - 1) : setAmount(amount)
            }>
            <Image source={minus} style={styles.forIcon}></Image>
          </TouchableOpacity>

          <Text style={styles.forProductAmount} numberOfLines={3}>
            {amount}
          </Text>
          <TouchableOpacity onPress={() => setAmount(amount + 1)}>
            <Image source={add} style={styles.forIcon}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.forAmountProduct}>
          {useDeleteCart}
          {usePutProductToCart}
        </View>
      </View>
    </ImageBackground>
  ) : null;
};
export default Product;
