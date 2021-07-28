import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,StyleSheet, Text, View , TouchableOpacity,} from 'react-native';
import img from './assets/02.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);


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
