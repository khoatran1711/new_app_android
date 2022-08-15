import React from 'react';
import {useState} from 'react';
import {StatusBar} from 'react-native';
import {Button, StyleSheet, TextInput, Platform} from 'react-native';
import {Image, Text, View} from 'react-native';
import {ImageBackground} from 'react-native';
import styles from './style';
//test
import {UseGetUser} from '../../../Data_query/Query.queries';
import {NavigationContainer} from '@react-navigation/native';

const imagebackground = require('./../../Pictures/background.png');
const title = require('./../../Pictures/title.png');
const logo = require('./../../Pictures/logo.png');
const account = require('./../../Pictures/account.png');
const password = require('./../../Pictures/password.png');

var account_value = '';
var password_value = '';

//console.log(myHookValue);

const LoginScreen = ({navigation}: {navigation: any}) => {
  console.log('myAPI', global.myAPI);
  global.navigationScreen = navigation;
  //test
  const withMyHook = UseGetUser();
  const [account_text, setAccount] = useState('');
  const [password_text, setPassword] = useState('');

  function account_change(new_text: string) {
    setAccount(new_text);
    account_value = account_text;
    global.account = new_text;
  }
  function password_change(new_text: string) {
    setPassword(new_text);
    password_value = password_text;
    global.password = new_text;
  }

  //var UserList = UseGetUser();
  //console.log(UserList);

  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'row',
        }}>
        <Image source={title} style={styles.forImage} />
      </View>

      <View
        style={{
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'row',
          marginBottom: '5%',
        }}>
        <Image source={logo} style={styles.forLogo} />
      </View>

      <View style={styles.forInputComponent}>
        <Image source={account} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your account"
          placeholderTextColor="white"
          onChangeText={account_change}></TextInput>
      </View>
      <View style={styles.forInputComponent}>
        <Image source={password} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your password"
          placeholderTextColor="white"
          onChangeText={password_change}></TextInput>
      </View>
      <Text style={styles.forSuggestion}>Forgot your password?</Text>
      {withMyHook}
      <Text
        style={styles.forCreateAccount}
        onPress={() => navigation.navigate('Signup')}>
        You dont have an account ? Create now
      </Text>
    </ImageBackground>
  );
};

export default LoginScreen;
