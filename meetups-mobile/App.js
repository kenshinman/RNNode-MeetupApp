import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentWillMount(){
    fetch("http://127.0.0.1:5000/api/meetups")
    .then( response => {
      return response.json()
    }).then( data => {
      console.log(data)
    }).catch( err => console.log("err =>", err))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
