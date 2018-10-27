import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback, Alert } from 'react-native';
export default class FieldSceen extends Component {
  static navigationOptions = {
    title: 'Lista boisk',
  };
  
  state = {fields: [
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', openHours: '8.00-21.00'}
  ]};
  renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('Games')}>
    <View style={{backgroundColor:'#fff',flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row', padding: 15}}>
      {item.imageUrl && <Image
        style={{height: 80, width: 80, borderRadius: 100, marginRight: 15}}
        source={{uri: item.imageUrl}}
      />}
      <View style={{width: '70%'}}>
        <Text style={{fontSize: 20}}>{item.name}</Text>
        <Text>{item.address}</Text>
        <Text>Godz. otwarcia: {item.openHours}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>

  );

  render() {
    return (
      <FlatList
        style={{width: '100%', padding: 10}}
        data={this.state.fields}
        renderItem={this.renderItem}
      />
    );
  }
}
