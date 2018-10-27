import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import FieldScreen from './FieldScreen';
import GamesOnFieldScreen from './GamesOnFieldScreen';

const RootStack = createStackNavigator({
  Field: { screen: FieldScreen },
  Games: { screen: GamesOnFieldScreen }
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
