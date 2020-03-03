import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://i.imgur.com/TkIrScD.png"}} style={styles.logo}></Image> 
      
      <Text style={styles.instructions}>
        To share a photo with a friend, just press the button below!</Text>
      
      <TouchableOpacity 
        onPress={() => alert('Hello, World')} 
        style={{backgroundColor: 'blue'}}>
        <Text style={{fontSize: 20, color: 'fff'}}>Pick a photo</Text> 
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,    
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});