import react from 'react';
import {useState} from 'react';
import {StatusBar} from 'react-native';
import {Button, StyleSheet, TextInput, Platform} from 'react-native';
import {Image, Text, View} from 'react-native';
import {ImageBackground} from 'react-native';
import styles from './style';
import {Touchable, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {UsePostUser} from '../../../Data_query/Query.queries';

import imagebackground from './../../Pictures/background.png';
import title from './../../Pictures/title_signup.png';
import logo from './../../Pictures/logo_signup.png';
import account from './../../Pictures/account.png';
import password from './../../Pictures/password.png';
import email from './../../Pictures/email.png';
import phone from './../../Pictures/phone-call.png';

var user_info_register = {
  user_account: '',
  user_password: '',
  user_mail: '',
  user_phone: '',
};

const SignupScreen = ({navigation}) => {
  const myPostUser = UsePostUser(navigation);
  const [account_text, setAccount] = useState('');
  const [password_text, setPassword] = useState('');
  const [mail_text, setMail] = useState('');
  const [phone_text, setPhone] = useState('');

  function ChangeAccount(new_text) {
    setAccount(new_text);
    user_info_register.user_account = new_text;
    global.regis_user = user_info_register;
  }

  function ChangePassword(new_text) {
    setAccount(new_text);
    user_info_register.user_password = new_text;
    global.regis_user = user_info_register;
  }

  function ChangeMail(new_text) {
    setAccount(new_text);
    user_info_register.user_mail = new_text;
    global.regis_user = user_info_register;
  }

  function ChangePhone(new_text) {
    setAccount(new_text);
    user_info_register.user_phone = new_text;
    global.regis_user = user_info_register;
  }

  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
      }}>
      <View
        style={{
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'row',
        }}>
        <Image source={title} style={styles.forImage} />
      </View>

      <View style={styles.forInputComponent}>
        <Image source={account} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your account"
          placeholderTextColor="white"
          onChangeText={ChangeAccount}></TextInput>
      </View>
      <View style={styles.forInputComponent}>
        <Image source={password} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your password"
          placeholderTextColor="white"
          onChangeText={ChangePassword}></TextInput>
      </View>

      <View style={styles.forInputComponent}>
        <Image source={email} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your email"
          placeholderTextColor="white"
          onChangeText={ChangeMail}></TextInput>
      </View>

      <View style={styles.forInputComponent}>
        <Image source={phone} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your phone"
          placeholderTextColor="white"
          onChangeText={ChangePhone}></TextInput>
      </View>

      <Text
        style={styles.forSuggestion}
        onPress={() => navigation.navigate('Login')}>
        Your already have an account? Login now{' '}
      </Text>

      {myPostUser}

      <View
        style={{
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'row',
          marginBottom: '5%',
        }}>
        <Image source={logo} style={styles.forLogo} />
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;
