/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './Screens/Screen/LoginScreen/LoginScreen';
import SignupScreen from './Screens/Screen/SignupScreen/SignupScreen';
import HomeScreen from './Screens/Screen/HomeScreen/HomeScreen';
import FindingScreen from './Screens/Screen/FindingScreen/FindingScreen';
import ProductScreen from './Screens/Screen/ProductScreen/ProductScreen';
import UserInfo from './Screens/Screen/UserInfoScreen/UserInfo';
import ChangingScreen from './Screens/Screen/ChangingScreen/ChangingScreen';
import HomeMangeScreen from './Screens/Screen/HomeManageScreen/HomeMangeScreen';
import AddingScreen from './Screens/Screen/AddingScreen/AddingScreen';
import ListProductScreen from './Screens/Screen/ListProductScreen/ListProductScreen';
import CartScreen from './Screens/Screen/CartScreen/CartScreen';
import InputAPIScreen from './Screens/Screen/InputAPIScreen';
import TestWebView from './Screens/Screen/TestWebView';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.disableYellowBox = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TestWebView" component={TestWebView} />
        <Stack.Screen name="InputAPI" component={InputAPIScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeManage" component={HomeMangeScreen} />
        <Stack.Screen name="ListProduct" component={ListProductScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Finding" component={FindingScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Adding" component={AddingScreen} />
        <Stack.Screen name="Changing" component={ChangingScreen} />
        {/*
         
         
          
    
          */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
