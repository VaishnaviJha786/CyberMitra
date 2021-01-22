
import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { addReport, getReport } from "../API/api";
import UploadScreen from './upload';
const { width: WIDTH } = Dimensions.get("window");

class report extends Component {

  state= {
    rep: null,
    sub: null
  }

  OptionAlertHandler = () => {
    Alert.alert(
      "Acknowledgement",
      "I acknowledge that the information I have provided in this form is correct to the best of my knowledge",
      [
        { text: "I Accept", 
        onPress: () => addReport({
          rep: this.state.rep,
          sub: this.state.sub
        })
      },
        {
          text: "Cancel",
          onPress: () => console.log("No Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
    this.props.navigation.navigate('Options');
  };
  
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/img1.jpg")}
      >
        <Text style={styles.text1}>REPORT</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Enter Subject"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={sub=>{this.setState({sub})}}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text2}>Describe your incident here :</Text>
          <TextInput
            style={styles.Maininput}
            //placeholder={"Describe your Incident"}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            multiline={true}
            onChangeText={rep=>{this.setState({rep})}}
          />
        </View>
        <View style={styles.upload}>
          <UploadScreen />
        </View>
        <View style={styles.submit}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={this.OptionAlertHandler}
          >
            <Text style={styles.btnText}>SUBMIT</Text>
          </TouchableOpacity>
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  upload:{
    alignContent: "center",
    alignItems:"center",
    width: "100%"
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    paddingTop: 10,
    paddingLeft: 30,
  },
  text2: {
    color: "white",
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 25,
    paddingBottom: 10,
  },
  container: {
    marginTop: 20,
    paddingLeft: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    fontSize: 20,
    marginHorizontal: 25,
    color: "rgba(255,255,255,0.7)",
    backgroundColor: "gray",
    paddingLeft: 10,
    textAlign: "left",
    borderColor: "white",
    borderWidth: 2,
  },
  Maininput: {
    width: WIDTH - 55,
    height: 90,
    fontSize: 20,
    marginHorizontal: 25,
    color: "rgba(255,255,255,0.7)",
    backgroundColor: "gray",
    borderColor: "white",
    borderWidth: 2,
  },
  submit: {
    width: 100,
    height: 50,
    paddingTop: 20,
    alignItems: "center",
    paddingLeft: 190,
  },
  btnContainer: {
    backgroundColor: "#2980b9",
    width: 100,
    height: 50,

    marginHorizontal: 25,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },
});
export default report;