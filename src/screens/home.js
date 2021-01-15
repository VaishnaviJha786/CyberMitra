import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";

const home =({navigation})=>{
  
    return (
      
      <ImageBackground
        style={styles.background}
        source={require("../assets/img1.jpg")}
      >
        <View style={styles.container}>
          <Text style={styles.cybermitra}>Cyber-Mitra</Text>
        </View>
        <View style={styles.signin}>
          <Button title="LOG IN" type="outline" fontSize="20" onPress={()=>navigation.navigate('Login')} />
        </View>
        <View style={styles.signup}>
          <Button title="SIGN UP" type="outline" fontSize="20"onPress={()=>navigation.navigate('Sign Up')} />
        </View>
      </ImageBackground>
      
    );
  }


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cybermitra: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    alignContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signin: {
    width: 100,
    height: 70,
    bottom: 200,
  },
  signup: {
    width: 100,
    height: 70,
    bottom: 180,
  },
});
export default home;