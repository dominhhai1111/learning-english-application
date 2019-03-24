import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  WebView
} from 'react-native';

export default class Test extends Component<Props> {
	static navigationOptions = {
    title: 'Test',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  };

  render() {
    return (
      <WebView
        source={{uri: 'https://infinite.red'}}
        style={{marginTop: 20}}
      />
    );
  }
}