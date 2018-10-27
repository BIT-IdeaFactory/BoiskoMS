import React, { Component } from 'react';
import { Alert, Text, View, TouchableWithoutFeedback, StyleSheet, FlatList } from 'react-native';
import {data} from './mockFieldScreenData';
import Styles from './Styles';

class GamesOnFieldScreen extends Component {
  static navigationOptions = {
    title: 'Lista gierek',
    headerStyle: {
      backgroundColor: '#108dc7',
      height: 80,
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 27
    },
    headerTintColor: '#fff'
  };

   state = data;
   alertItemName = (item) => {
      alert(item.name)
   }

   renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={ () => Alert.alert(item.place)}>
        <View style={Styles.listItem2}>
            <Text>{item.name} {item.id}</Text>
            <Text>Gdzie: {item.place}</Text>
            <Text>Kiedy: {item.time}</Text>
        </View>
    </TouchableWithoutFeedback>
  );

  render() {
    return (
      <FlatList
        style={Styles.list}
        data={this.state.names}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
export default GamesOnFieldScreen
