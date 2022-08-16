import React from 'react';
import {Text} from 'react-native';
import {WebView} from 'react-native-webview';
const TestWebView = () => {
  return <WebView source={{uri: 'https://instamobile.io/blog'}} />;
};

export default TestWebView;
