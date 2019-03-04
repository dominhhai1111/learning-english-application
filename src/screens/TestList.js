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
  static navigationOptions = {
    title: 'Practice',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  };

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
      <View style={styles.test} key={item.id}>
        <View style={styles.test_image_area}>
          <Image source={require('../img/photograph.jpg')}
               style={{
                  width: 120,
                  height: 100,
                  resizeMode: 'contain'
               }}>
        </Image>
        </View>
        <View style={styles.test_title_area}>
          <Text style={styles.test_title}>
            {item.name}
          </Text>
        </View>
      </View> 
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
  test: {
    backgroundColor: '#fcb202',
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row' 
  },
  test_image_area: {
    width: 120,
    height: 100,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  test_title_area: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  test_title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold'
  } 
});