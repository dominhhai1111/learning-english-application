import React from 'react';
import {Text} from 'react-native';
import Login from './src/screens/Login.js';
import TopicList from './src/screens/TopicList.js';
import TestList from './src/screens/TestList.js';
import Test from './src/screens/Test.js';
import AppWebView from './src/screens/AppWebView.js';
import Register from './src/screens/Register.js';
import {createStackNavigator} from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const AppNavigator = createStackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
  TopicList: {screen: TopicList},
  TestList: {screen: TestList},
  Test: {screen: Test},
  AppWebView: {screen: AppWebView},
});

export default AppNavigator;