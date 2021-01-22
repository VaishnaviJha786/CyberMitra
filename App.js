import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import home from './src/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import report from './src/screens/report';
import splashScreen from './src/screens/splash';
import login from './src/screens/login';
import signUp from './src/screens/signUp';
import options from './src/screens/options';
import Loading from './src/screens/Loading';
import {firebase} from '@react-native-firebase/app';
import UploadScreen from './src/screens/upload';
import {addReport} from './src/API/api'
import AdminScreen from './src/screens/adminReport'
import consult from './src/screens/consult'
const firebaseConfig = {
  apiKey: "AIzaSyC6iQfO1yO275fItOrzq-_RX7kon3LjlWI",
    authDomain: "cybermitra-92ff0.firebaseapp.com",
    databaseURL: "https://cybermitra-92ff0.firebaseio.com",
    projectId: "cybermitra-92ff0",
    storageBucket: "cybermitra-92ff0.appspot.com",
    messagingSenderId: "806543750024",
    appId: "1:806543750024:web:95aa171fa9df4c5f3ac03d",
    measurementId: "G-WK54J6YFQN"   
}
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack=createStackNavigator();
const App= () => {
  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
    <View style={styles.appview}>
      <Stack.Navigator>
      <Stack.Screen name="Cyber-Mitra" component={splashScreen}/>
        <Stack.Screen name="Home" component={home}/>
        <Stack.Screen name="Report" component={report}/>
        <Stack.Screen name="Consult" component={consult} />
        <Stack.Screen name="Options" component={options}/>
        <Stack.Screen name="Login" component={login}/>
        <Stack.Screen name="Sign Up" component={signUp}/>
        <Stack.Screen name="Loading" component={Loading}/>
        <Stack.Screen name="Upload" component={UploadScreen}/>
        <Stack.Screen name="addReport" component={addReport}/>
        <Stack.Screen name="Reports" component={AdminScreen}/>
       </Stack.Navigator>
    </View>
    </>
  );
};
/*

*/
const styles = StyleSheet.create({
  appview:{
    flex:1,
    backgroundColor: '#000000',
    
  }
});


export default()=>{
  return( 
   <NavigationContainer>
         <App /> 
   </NavigationContainer>
  );
 }
