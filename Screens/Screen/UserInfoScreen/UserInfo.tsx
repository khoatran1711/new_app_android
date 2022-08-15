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

import {UseGetUserInfo} from '../../../Data_query/Query.queries';
import {UsePutUserInfo} from '../../../Data_query/Query.queries';

import styles from './style';

const imagebackground = require('./../../Pictures/background.png');
const lefticon = require('./../../Pictures/left_icon.png');
const carticon = require('./../../Pictures/cart.png');
const hellobanner = require('./../../Pictures/hello_banner.png');

var new_info_user = {
  userAccount: '',
  userName: '',
  userPhone: '',
  userMail: '',
};

const UserInfo = ({navigation}: {navigation: any}) => {
  const myPutUserInfo = UsePutUserInfo(navigation);
  //test
  const information = UseGetUserInfo() as any;
  const [name_text, setName] = useState('');
  const [phone_text, setPhone] = useState('');
  const [mail_text, setMail] = useState('');

  global.oldinformation = information ? information : '';
  console.log('old', global.oldinformation);
  global.changinguser = new_info_user;

  function ChangeName(new_text: string) {
    setName(new_text);
    new_info_user.userName = new_text;
    global.changinguser = new_info_user;
    console.log('e');
  }

  function ChangePhone(new_text: string) {
    setPhone(new_text);
    new_info_user.userPhone = new_text;
    global.changinguser = new_info_user;
  }

  function ChangeMail(new_text: string) {
    setMail(new_text);
    new_info_user.userMail = new_text;
    global.changinguser = new_info_user;
  }

  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={lefticon} style={styles.forLeftIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={carticon} style={styles.forLeftIcon}></Image>
        </TouchableOpacity>
        <Image source={hellobanner} style={styles.forHelloBanner}></Image>
        <Text style={styles.forWelcomeTitle}>
          {' '}
          Welcome back, {information.userName}
        </Text>
        <Text style={styles.forUserInfoTitle}>Your Name</Text>
        <TextInput
          style={styles.forUserInputInfo}
          defaultValue={information.userName}
          onChangeText={ChangeName}></TextInput>
        <Text style={styles.forUserInfoTitle}>Your Phone</Text>
        <TextInput
          style={styles.forUserInputInfo}
          defaultValue={information.userPhone}
          onChangeText={ChangePhone}></TextInput>
        <Text style={styles.forUserInfoTitle}>Your Mail</Text>
        <TextInput
          style={styles.forUserInputInfo}
          defaultValue={information.userMail}
          onChangeText={ChangeMail}></TextInput>
        {myPutUserInfo}
      </ScrollView>
    </ImageBackground>
  );
};

export default UserInfo;
