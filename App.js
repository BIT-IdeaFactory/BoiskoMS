import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RootStack from './RootStack';

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
