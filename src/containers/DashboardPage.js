import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,
    StatusBar,
    Platform,
    // TouchableOpacity,
} from 'react-native';
import Button from 'antd-mobile/lib/button';
import Checkbox from 'antd-mobile/lib/checkbox';
import List from 'antd-mobile/lib/list';
import InputItem from 'antd-mobile/lib/input-item';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

// let heightBotton = Platform.OS === 'ios' ? 55 : 78;

const styles = StyleSheet.create({
  head: {
    color: '#2d3036',
    fontSize: 25,
    marginBottom: 10,
    alignSelf: 'center',
    textAlign: 'center'
  },
  sub_head: {
    textAlign: 'center',
    fontSize: 15,
    color: '#333333',
    marginBottom: 10,
  },
  register_text_first: {
    fontSize: 15,
    color: '#2d3036',
  },
  register_text_last: {
    fontSize: 15,
    color: '#108ee9',
  },
  line: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: '#2d3036',
    position: 'absolute',
    top: 0
  },
  item: {
    height: deviceHeight,
    width: deviceWidth,
    position: 'absolute',
    top: 0
  }
});

@connect(state => ({ ...state }), dispatch => bindActionCreators({}, dispatch))

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  componentWillMount() {

  }
  render() {
    const bg = require('../resources/logo.png');
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#44c5fb" barStyle="light-content" />
        <ScrollView scrollEnabled={false} contentContainerStyle={{ width: deviceWidth - 60, flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
          <Image
            style={{ width: 145, height: 167, justifyContent: 'center', alignSelf: 'center' }}
            source={bg}
            resizeMode="cover"
          />
          <Text style={styles.head}>Open Source Beehives</Text>
          <Text style={styles.sub_head}>BuzzBox Application </Text>
          <List>
            <InputItem
              placeholder="Username"
              labelNumber={3}
              >1</InputItem>
            <InputItem
              placeholder="Password"
              labelNumber={3}
              >2</InputItem>
          </List>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Checkbox
                name={'agree'}
                checked={this.state.checked}
                defaultChecked={this.state.checked}
                onChange={(e) => { this.setState({ checked: e.target.checked }); }}
              />
              <Text style={styles.sub_head}> Remember me</Text>
            </View>
            <View>
              <Text style={styles.register_text_last}>Forgot password</Text>
            </View>
          </View>

          <Button
            type={'primary'}
            onClick={() => { console.log('Log in'); }}
          >
            Log in
          </Button>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
            <Text style={styles.register_text_first}>or </Text>
            <Text style={styles.register_text_last}>register</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DashboardPage;

