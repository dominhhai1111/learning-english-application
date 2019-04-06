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
      list: [{'name': 'Test 1', 'id': 0, 'key': 0, 'content': 'Introduce about the test', 'score': '9/10', 'testTime': 10, 'time': '10:20', 'date': '01/01/2019'}]
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
            <TouchableHighlight onPress={() => this.goToNextScreen()}>
              {this.viewTest(item)}
            </TouchableHighlight>
          )
        }
      }
        keyExtractor = { (item, index) => index.toString() }
      />
    )
  }

  goToNextScreen() {
    var {navigate} = this.props.navigation;
    navigate('Test', {});
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
          <Text style={styles.test_title}>
            {item.content}
          </Text>
          <View style={styles.score_area}>
              <Text style={styles.score_title}>
                Score:
                </Text>
              <Text style={styles.score}>
                {item.score}
             </Text>
          </View>
          <View style={styles.score_area}>
              <Text style={styles.score_title}>
                Time:
                </Text>
              <Text style={styles.score}>
                {item.testTime} minutes
             </Text>
          </View>
          <View style={styles.score_area}>
              <Text style={styles.score}>
                {item.date}
             </Text>
          </View>
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
  },
  score_area: {
    width: 'auto',
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10 
  },
  score_title: {
    fontSize: 20
  },
  score: {
    width: '100%',
    padding: 0,
    margin: 0,
    fontSize: 20
  }
});