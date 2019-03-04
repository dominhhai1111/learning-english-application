/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import getAllTopics from '../api/getTopics';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';

type Props = {};
export default class TopicList extends Component<Props> {
  static navigationOptions = {
    title: 'Topics',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [{'name': 'Chủ đề', 'id': 0, 'key': 0}]
    }
  }

  componentDidMount() {
    getAllTopics()
    .then(topics => {
      topics.map((topic) => {
        topic['key'] = topic['id'];
      });
      this.setState({list: topics});
    })
    .catch(err => console.log(err));
  }

  goToNextScreen() {
    var {navigate} = this.props.navigation;
    navigate('TestList', {});
  }

  topicList = ()  => {
    return (
      <FlatList
        data={this.state.list}
        renderItem={({item}) => {
          return(
            <TouchableHighlight onPress={() => this.goToNextScreen()}>
              {this.topic(item)}
            </TouchableHighlight>
          )
        }
      }
        keyExtractor = { (item, index) => index.toString() }
      />
    )
  }

  topic = (topic) => {
    return (
      <View style={styles.topic} key={topic.id}>
        <View style={styles.topic_image_area}>
          <Image source={require('../img/photograph.jpg')}
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
