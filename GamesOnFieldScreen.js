import React, { Component } from 'react'
import { Alert, Text, View, TouchableWithoutFeedback, StyleSheet, FlatList } from 'react-native'
import {data} from './mockFieldScreenData'   

class GamesOnFieldScreen extends Component {
   state = data;
   alertItemName = (item) => {
      alert(item.name)
   }

   renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={ () => Alert.alert(item.place)}>
        <View backgroundColor='yellow' marginTop='5%'>
            <Text style={{textAlign: 'center'}}>{item.name} {item.id}</Text>
            <Text>Gdzie: {item.place}</Text>
            <Text>Kiedy: {item.time}</Text>
        </View>
    </TouchableWithoutFeedback>
  );

  render() {
    return (
      <FlatList
        style={{width: '100%'}}
        data={this.state.names}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
export default GamesOnFieldScreen
