import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import { firebaseAuth } from '../../environment/config';

const { width: WIDTH } = Dimensions.get("window");

export default class login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    console.log('handleLogin')
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Options'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/img1.jpg")}
      >
        <View style={styles.vtext}>
          <Text style={styles.textcontainer}>LOG IN</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          <Text style={styles.text2}>Welcome to Cyber-Mitra</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder={"Password"}
              secureTextEntry={true}
              placeholderTextColor={"rgba(255,255,255,0.7)"}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </View>
          <View style={styles.vtext}>
            <TouchableOpacity onPress={this.handleLogin}> 
            <View style={styles.btnContainer}>
              <Text style={styles.btnText} onPress={this.handleLogin}>LOG IN</Text>
            </View>
            </TouchableOpacity>
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
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 20,
    paddingLeft: 45,
    marginHorizontal: 25,
    color: "rgba(255,255,255,0.7)",
    backgroundColor: "gray",
  },
  btnContainer: {
    backgroundColor: "#2980b9",
    width: 100,
    height: 50,
    borderRadius: 25,

    marginHorizontal: 25,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },

  textcontainer: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 10,
  },
  vtext: {
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
  },
});