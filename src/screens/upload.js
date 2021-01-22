import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

import * as Progress from 'react-native-progress';

export default function UploadScreen() {
  const [imageUploaded,setImageUploaded]=useState(true);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  


 

const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log(source);
        setImage(source);
        
      }
    });
  };
  const uploadImage = async () => {
    if (image===null)
    {
      Alert.alert("No image selected");
      return;
    }
    const { uri } = image;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
   
    setUploading(true);
    setTransferred(0);
    const task = storage()
    .ref('images/'+filename).
    putFile(uploadUri);
       // set progress state
    task.on('state_changed', snapshot => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
      );
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    setUploading(false);
    
    setImageUploaded(false);
    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!'
    );
    
  };

  const removeImage=()=>{
   setImage(null);
  }
  return (
  
    <SafeAreaView style={styles.container}>
      {imageUploaded ?
      (
      <View style={styles.imageContainer}>
        {image !== null ? (
          <View>
            <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
              <Text style={styles.buttonText}>Change image</Text>
            </TouchableOpacity>
            <Image source={{ uri: image.uri }} style={styles.imageBox} />
            <TouchableOpacity style={styles.selectButton} onPress={removeImage}>
                <Text style={styles.buttonText}>Delete image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectButton} onPress={uploadImage}>
              <Text style={styles.buttonText}>Upload image</Text>
            </TouchableOpacity>
          </View>
        ) : <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
        <Text style={styles.buttonText}>Select image</Text>
      </TouchableOpacity>}
       
          
        
      </View>
      ):
      (<View style={styles.container}>
          <Image source={{ uri: image.uri }} style={styles.imageBox} />
          <Text style={{fontSize:20, color: "white"}}> Image Uploaded</Text>
      </View>)}

    </SafeAreaView>
  );

};
  
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingTop: 10
    },
    selectButton: {
      backgroundColor: "#2980b9",
      width: 100,
      height: 25,
  
      marginHorizontal: 25,
      marginTop: 20,
      
    },
    buttonText: {
      color: "white",
      fontSize: 15,
      marginTop: 3,
      textAlign: "center",
    },
    imageContainer: {
      marginTop: 30,
      marginBottom: 50,
      alignItems: 'center'
    },
    progressBarContainer: {
      marginTop: 20
    },
    imageBox: {
      width: 50,
      height: 50,
      paddingTop:10
    }
  });