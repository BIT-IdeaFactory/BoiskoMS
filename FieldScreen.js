import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import Styles from './Styles';

export default class FieldSceen extends Component {
  static navigationOptions = {
    title: 'Lista boisk',
    headerStyle: {
      backgroundColor: '#108dc7',
      height: 80
    },
    titleStyle: {
      color:'white'
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
    <View style={Styles.listItem}>
      {item.imageUrl && <Image
        style={Styles.listImage}
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
        style={Styles.list}
        data={this.state.fields}
        renderItem={this.renderItem}
      />
    );
  }
}
