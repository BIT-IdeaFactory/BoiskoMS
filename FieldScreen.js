import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback, Alert } from 'react-native';
export default class FieldSceen extends Component {
  static navigationOptions = {
    title: 'Lista boisk',
  };
  
  state = {fields: [
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'},
      {name: 'Boisko MS', address: 'Miasteczko Studenckie', imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'}
  ]};
  renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('Games')}>
    <View style={{backgroundColor:'#FFFF00'}}>
      <Text style={{textAlign: 'center'}}>{item.name}</Text>
      <Text>{item.address}</Text>
      {item.imageUrl && <Image
        style={{height: 100, width: 100}}
        source={{uri: item.imageUrl}}

      />}
    </View>
    </TouchableWithoutFeedback>

  );

  render() {
    return (
      <FlatList
        style={{width: '100%'}}
        data={this.state.fields}
        renderItem={this.renderItem}
      />
    );
  }
}
