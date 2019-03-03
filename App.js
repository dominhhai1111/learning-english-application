import React from 'react';
import {Text} from 'react-native';
import TopicList from './src/screens/TopicList.js';
import TestList from './src/screens/TestList.js';
import {createStackNavigator} from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const AppNavigator = createStackNavigator({
  TopcicList: {screen: TopicList},
  TestList: {screen: TestList}
});

export default AppNavigator;