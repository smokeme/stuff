import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Alert
} from 'react-native';

import{
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Icon,
  Card,
  CardItem,
} from 'native-base';

class SignUp extends Component {
  constructor(props){
    super(props);
    const url = "https://pure-ravine-38367.herokuapp.com/register/";
    this.state = {
      status: "",
      response: "",
      username: "",
      password:"",
      url: url
    }
  }

  postData(username, password){
    fetch(this.state.url, {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
      })
    }).then((response) =>{
      this.setState({
        response:response,
        status:response.status
      });
      if(response.status === 201)
      {
        console.log(response);
        Alert.alert("Created!");
      }
      else if(response.status === 400)
      {
        console.log(response);
        Alert.alert("Check your input");
      }
      else
      {
        console.log(response);
        Alert.alert("Failed, please try again later!");
      }
    }).catch((error) =>{
      console.log(error);
      Alert.alert("Something went wrong!");
    })
    .done();
  }

  onButtonPress(){
    this.postData(this.state.username, this.state.password);
  }

  render() {
    return (
      <View style={{padding:10}}>
        <TextInput
        style={{height:40}}
        placeholder="username"
        onChangeText={(username) => this.setState({username})}
        />
        <TextInput
        style={{height:40}}
        placeholder="password"
        onChangeText={(password) => this.setState({password})}
        />
        <Button onPress={this.onButtonPress.bind(this)}>
            <Text>SignUp</Text>
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default SignUp;
