import React, {Component} from 'react';
import {View, StatusBar, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';

export default class splashScreen extends Component {
    constructor(props) {
        super(props);
      }
  componentDidMount() {
    setTimeout(() => {
      this.moveToNextScreen();
    }, 6000);
  }
  moveToNextScreen = () => {
    this.props.navigation.dispatch(StackActions.replace('Home'));
  };
  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#baf5d2',
        }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 200, height: 200}}
          source={require('../images/logo.png')}
          resizeMode="contain"
        />
      </View>
    );
  }
}
