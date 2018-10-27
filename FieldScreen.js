import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback, Alert } from 'react-native';
export default class FieldSceen extends Component {
  static navigationOptions = {
    title: 'Lista boisk',
    headerStyle: {
      backgroundColor: '#108dc7',
      height: 80
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 27,
      width: '93%',
      textAlign: 'center'
    }
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
    <View style={{backgroundColor:'#fff', marginBottom: 5, flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row', padding: 15, borderWidth: 1, borderColor: "#ddd"}}>
      {item.imageUrl && <Image
        style={{height: '100%', width: '18%', borderRadius: 100, marginRight: '5%'}}
        source={{uri: item.imageUrl}}
      />}
      <View style={{width: '77%'}}>
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
