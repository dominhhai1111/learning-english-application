/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import getAllTopics from './src/api/getTopics';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      list: [{'name': 'Chủ đề', 'id': 0}]
    }
  }

  componentDidMount() {
    getAllTopics()
    .then(topics => {
      this.setState({list: topics});
    })
    .catch(err => console.log(err));
  }

  topicList = ()  => {
    return this.state.list.map((topic) => {
      return (
        <View style={styles.topic} key={topic.id}>
          <View style={styles.topic_image_area}>
            <Image source={require('./src/img/photograph.jpg')}
                 style={{
                    width: 120,
                    height: 100,
                    resizeMode: 'contain'
                 }}>
          </Image>
          </View>
          <View style={styles.topic_title_area}>
            <Text style={styles.topic_title}>
              {topic.name}
            </Text>
          </View>
        </View> 
      )
    })
  }

  render() {
    return (
      <View style={styles.list}>
        {this.topicList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  list: {
    flex: 1,
    backgroundColor: '#faf3e0'
  },
  topic: {
    backgroundColor: '#fcb202',
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row' 
  },
  topic_image_area: {
    width: 120,
    height: 100,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topic_title_area: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  topic_title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold'
  } 
});
