import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import { ScrollView } from "react-native-gesture-handler";
import List1 from './lists/List1';
import List2 from './lists/List2';
import List3 from './lists/List3';


const { width: WIDTH } = Dimensions.get("window");
export class LegalAdvisors extends Component {
  render() {
    return (
      
        <ScrollView style={styles.scroll}>
          <List1 />
        </ScrollView>
     
    );
  }
}
export class NGO extends Component {
  render() {
    return (
      
        <ScrollView style={styles.scroll}><List2 />
        </ScrollView>
     
    );
  }
}
export class Doctors extends Component {
  render() {
    return (
     
        <ScrollView style={styles.scroll}>
          <List3 />
        </ScrollView>
      
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
  input: {
    width: WIDTH - 100,
    height: 45,
    borderRadius: 25,
    fontSize: 20,
    //paddingLeft: 100,
    textAlign: "center",
    marginHorizontal: 25,
    color: "black",
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "black",
    borderWidth: 1,
  },
  input2: {
    width: WIDTH - 100,
    height: 45,
    borderRadius: 25,
    fontSize: 20,
    //paddingLeft: 100,
    textAlign: "center",
    marginHorizontal: 25,
    color: "black",
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "black",
    borderWidth: 1,
    bottom: 230,
  },
  container: {
    flex: 1,
  },
  btn: {
    width: 100,
    height: 50,
    bottom: 400,
    backgroundColor: "rgba(0,0,0,0)",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 20,
    marginHorizontal: 25,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 10,
    color: "black",
    fontWeight: "bold",
  },
  container2: {
    alignItems: "center",
    top: 200,
  },
  container3: {
    bottom: 100,
  },
  text1: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: 50,
  },
  text2: {
    color: "black",
    fontSize: 20,
  },
  text3: {
    fontSize: 20,
    color: "#0000ff",
    fontWeight: "bold",
  },
});

const RootStack = createMaterialTopTabNavigator();



const consult=()=>{
  return(
    <RootStack.Navigator tabBarOptions={{
      
      labelStyle:{fontSize:14,},
      indicatorStyle:{backgroundColor:'#2980b9'}
    
    }}  >
      <RootStack.Screen name="Legal Advisors" component={LegalAdvisors}/>
      <RootStack.Screen name="NGO" component={NGO}/>
      <RootStack.Screen name="Doctors" component={Doctors}/>
      
    </RootStack.Navigator>
  );
}
export default consult;

