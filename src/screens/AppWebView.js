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

export default class AppWebView extends Component<Props> {
	static navigationOptions = {
    header: null
  };

  render() {
    return (
      <WebView
        source={{uri: 'http://blackfriday2610.xyz/user/list-topics'}}
        style={{marginTop: 20}}
      />
    );
  }
}