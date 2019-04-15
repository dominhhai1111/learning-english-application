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
        source={{uri: 'http://blackfriday2610.xyz/tests/photograph?id=2&cookie=123'}}
        style={{marginTop: 20}}
      />
    );
  }
}