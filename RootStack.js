import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import FieldScreen from './FieldScreen';

const RootStack = createStackNavigator({
  Field: {
    screen: FieldScreen
  },
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
