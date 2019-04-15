import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  WebView,
  Alert
} from 'react-native';

export default class Test extends Component<Props> {
	static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  onMessage( event ) {
    var data = JSON.parse(event.nativeEvent.data);
    if (data['backToLogin'] != undefined && data['backToLogin']) {
      this.backToLogin();
    }
  };

  backToLogin() {
    var {navigate} = this.props.navigation;
    navigate('Login', {});
  };

  render() {
    return (
      <WebView
        source={{uri: 'http://blackfriday2610.xyz/user/register'}}
        onMessage={this.onMessage.bind(this)}
      />
    );
  }
}