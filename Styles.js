import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  list: {
    width: '100%', 
    padding: 10
  },

  listItem: {
    backgroundColor:'#fff',
    marginBottom: 5, 
    flexWrap: 'wrap', 
    alignItems: 'flex-start', 
    flexDirection:'row', 
    padding: 15, 
    borderWidth: 1, 
    borderColor: "#ddd"
  },

  listItem2: {
    backgroundColor:'#fff',
    marginBottom: 5, 
    padding: 15, 
    borderWidth: 1, 
    borderColor: "#ddd"
  },

  listImage: {
    height: '100%',
    width: '18%', 
    borderRadius: 100, 
    marginRight: '5%'
  }
});
