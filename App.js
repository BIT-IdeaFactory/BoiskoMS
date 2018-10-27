import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import { Alert, Button } from 'react-native';
import GamesOnFieldScreen from './GamesOnFieldScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <GamesOnFieldScreen/>
      </View>
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
