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

import imagebackground from './../../Pictures/background.png';
import lefticon from './../../Pictures/left_icon.png';
import hellobanner from './../../Pictures/hello_banner.png';

var new_info_user = {
  user_account: '',
  user_name: '',
  user_phone: '',
  user_mail: '',
};

const UserInfo = ({navigation}) => {
  const myPutUserInfo = UsePutUserInfo(navigation);
  //test
  const information = UseGetUserInfo();
  const [name_text, setName] = useState('');
  const [phone_text, setPhone] = useState('');
  const [mail_text, setMail] = useState('');

  global.oldinformation = information ? information : '';
  console.log('old', global.oldinformation);
  global.changinguser = new_info_user;

  function ChangeName(new_text) {
    setName(new_text);
    new_info_user.user_name = new_text;
    global.changinguser = new_info_user;
    console.log('e');
  }

  function ChangePhone(new_text) {
    setPhone(new_text);
    new_info_user.user_phone = new_text;
    global.changinguser = new_info_user;
  }

  function ChangeMail(new_text) {
    setMail(new_text);
    new_info_user.user_mail = new_text;
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
        <Image source={hellobanner} style={styles.forHelloBanner}></Image>
        <Text style={styles.forWelcomeTitle}>
          {' '}
          Welcome back, {information.user_name}
        </Text>
        <Text style={styles.forUserInfoTitle}>Your Name</Text>
        <TextInput
          style={styles.forUserInputInfo}
          defaultValue={information.user_name}
          onChangeText={ChangeName}></TextInput>
        <Text style={styles.forUserInfoTitle}>Your Phone</Text>
        <TextInput
          style={styles.forUserInputInfo}
          defaultValue={information.user_phone}
          onChangeText={ChangePhone}></TextInput>
        <Text style={styles.forUserInfoTitle}>Your Mail</Text>
        <TextInput
          style={styles.forUserInputInfo}
          defaultValue={information.user_mail}
          onChangeText={ChangeMail}></TextInput>
        {myPutUserInfo}
      </ScrollView>
    </ImageBackground>
  );
};

export default UserInfo;
