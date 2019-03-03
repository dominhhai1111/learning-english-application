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
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      list: [{'name': 'Test 1', 'id': 0, 'key': 0}]
    }
  }

  componentDidMount() {
  }

  testList = ()  => {
    return (
      <FlatList
        data={this.state.list}
        renderItem={({item}) => {
          return(
            this.viewTest(item)
          )
        }
      }
        keyExtractor = { (item, index) => index.toString() }
      />
    )
  }

  viewTest = (item) => {
    return (
      <Text>{item.name}</Text>
    )
  }

  render() {
    return (
      <View>
        {this.testList()}
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
});