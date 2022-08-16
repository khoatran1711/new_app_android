import react from 'react';
import {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Button, StyleSheet, TextInput, Platform} from 'react-native';
import {Image, Text, View} from 'react-native';
import {ImageBackground} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Cart from './Cart/Cart';
import History from './History/History';
const imagebackground = require('./../../Pictures/background.png');

const Tab = createBottomTabNavigator();

const CartScreen = () => {
  const [option, changeOption] = useState(0);
  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: '100%',
        height: '100%',
      }}>
      {option % 2 == 0 ? <Cart /> : <History />}
      <TouchableOpacity
        style={{
          backgroundColor: option % 2 == 0 ? 'blue' : 'red',
          alignItems: 'center',
        }}
        onPress={() => changeOption(option + 1)}>
        <Text>Click</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default CartScreen;
