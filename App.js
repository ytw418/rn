import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,StyleSheet, Text,TextInput, View , TouchableOpacity, TouchableHighlight} from 'react-native';
import img from './assets/02.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 
import {useState} from 'react';


export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [count, setCount] = useState(0)


  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }; 


  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />

<TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const [text,setText] = useState('')




  return (
    <View style={styles.container}>
      <Image source={{uri : "https://docs.expo.io/static/images/tutorial/logo.png"}} style={styles.img}/>

      <Text style={styles.instructons}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress = {openImagePickerAsync}
        style={styles.button}>
          <Text style={styles.buttonText}>
            pick a photo
          </Text>

      </TouchableOpacity>


      <TextInput
          value={text}
          style={{fontSize:42,color:'steelblue',position:'center'}}
          placeholder="Type here"
          onChangeText={(TEXT) => {setText(text)}}
          ></TextInput>
          <text style={{fontSize:24}}>
            {'\n'}you entered: {text}
    
          </text>

    <TouchableOpacity
    style={styles.button}
    activeOpacity={0.7}
    onPress={() => {setCount(count + 1)}}><Text> press me!</Text>
    </TouchableOpacity>
    <Text>{`pressed ${count} times`}</Text>

    <TouchableHighlight
        style={styles.button}
        underlayColor="#FAB"
        onPress={() => {
          setCount(count + 1)
        }}
      >
        <Text style={styles.text}>Press me!</Text>
      </TouchableHighlight>







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
  img:{
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructons:{
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  button:{
    backgroundColor:"blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText:{
    fontSize:20,
    color:'#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "cover"
  },
});
