<<<<<<< HEAD
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RootStack from './RootStack';
=======
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import { Alert, Button } from 'react-native';
import GamesOnFieldScreen from './GamesOnFieldScreen';
>>>>>>> fdc216bb293f9fc3bb19c24fb6a48c817366bae3

export default class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <RootStack/>
=======
      <View>
        <GamesOnFieldScreen/>
      </View>
>>>>>>> fdc216bb293f9fc3bb19c24fb6a48c817366bae3
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
