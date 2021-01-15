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
        <Stack.Screen name="Options" component={options}/>
        <Stack.Screen name="Login" component={login}/>
        <Stack.Screen name="Sign Up" component={signUp}/>
        <Stack.Screen name="Loading" component={Loading}/>
        
       </Stack.Navigator>
    </View>
    </>
  );
};
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
