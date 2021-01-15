import React, { Component } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
} from "react-native";

import { firebaseAuth } from '../../environment/config';

import { TouchableOpacity } from "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
export default class options extends React.Component{

  constructor(props) {
    super(props);
    this.state = { currentUser: null, errorMessage: null }
}


componentDidMount() {
    const { currentUser } = firebaseAuth;
    this.setState({ currentUser })
}

onPressButton = () => {
    firebaseAuth.signOut()
        .then(() => this.props.navigation.navigate('Login'))
        .catch(error => this.setState({ errorMessage: error.message }));
}
render(){
  const { currentUser } = this.state
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/img1.jpg")}
      >
        
        <View style={styles.heading}>
          <Text style={styles.text2}>CHOOSE ANY ONE</Text>
        </View>

        <View style={styles.MainContainer}>
          <TouchableOpacity style={styles.btnContainer}>
            <Image
              source={require("../assets/report.png")}
              style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.btnText} onPress={()=>this.props.navigation.navigate('Report')}>REPORT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.MainContainer}>
          <TouchableOpacity style={styles.btnContainer}>
            <Image
              //source={require("./assets/consult.jpeg")}
              style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.btnText}>CONSULT</Text>
          </TouchableOpacity>
          <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <View>
                    <Button
                        onPress={this.onPressButton}
                        title="Sign Out"
                    />
                </View>
            </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: 150,
    borderRadius: 5,
    margin: 5,
    backgroundColor: "#2980b9",

    marginHorizontal: 25,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  textcontainer: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 10,
  },
  heading: {
    alignItems: "flex-start",
    marginTop: 20,
  },
  text2: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  text3: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  SeparatorLine: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
