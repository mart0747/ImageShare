import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return; 
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri});
  }

  if (selectedImage !== null) {
    return (
      <View style = {styles.container}>
        <Image 
          source = {{uri: selectedImage.localUri }}
          style = {styles.thumbnail}>
        </Image> 
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source = {{uri: "https://i.imgur.com/TkIrScD.png"}} style = {styles.logo}></Image> 
      
      <Text style = {styles.instructions}>
        To share a photo with a friend, just press the button below!</Text>
      
      <TouchableOpacity 
        onPress = {openImagePickerAsync} 
        style = {styles.button}>
        <Text style = {styles.buttonText}>Pick a photo</Text> 
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
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#888',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
