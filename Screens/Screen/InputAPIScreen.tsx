import {useState} from 'react';
import {StatusBar} from 'react-native';
import {Button, StyleSheet, TextInput, Platform} from 'react-native';
import {Image, Text, View} from 'react-native';
import {ImageBackground} from 'react-native';

//import imagebackground from '../Pictures/background.png';
const imagebackground = require('../Pictures/background.png');

const InputAPIScreen = ({navigation}: {navigation: any}) => {
  const [api_text, setAPI] = useState('');

  function changeAPI(new_text: string) {
    setAPI(new_text);
    global.myAPI = new_text;
    console.log(global.myAPI);
  }

  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <TextInput
        style={{
          borderBottomColor: 'white',
          borderBottomWidth: 2,
          width: '70%',
          marginLeft: '5%',
          fontSize: 20,
          color: 'white',
        }}
        onChangeText={changeAPI}></TextInput>
      <Button title="OK" onPress={() => navigation.navigate('Login')}></Button>
    </ImageBackground>
  );
};

export default InputAPIScreen;
