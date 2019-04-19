import React, { Component } from 'react';
import {
  AsyncStorage,
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

  constructor(props) {
    super(props);
    this.state = {
      rememberToken : '',
    }
  }

  componentWillMount() {
    this.getUser();
  }

  getUser() {
    AsyncStorage.getItem('remember_token', (error, result) => {
      console.log("token: " + result);
      this.setState({
        rememberToken: result,
      });
    });
  }

  render() {
    console.log("state: " + this.state.rememberToken);
    return (
      <WebView
        source={{uri: 'http://blackfriday2610.xyz/user/list-topics?remember_token=' + this.state.rememberToken}}
        style={{marginTop: 20}}
      />
    );
  }
}