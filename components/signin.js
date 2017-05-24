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

class SignIn extends Component {
  constructor(props){
    super(props);
    const url = "https://pure-ravine-38367.herokuapp.com/obtain_token/";
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
      return response.json();
      })
      .then(responseData =>{
        this.setState({
          token:responseData.token,
        });

      if(this.state.status === 200)
      {
        console.log(this.state.response);
        Alert.alert("Signed In!");
      }
      else if(this.state.status === 400)
      {
        console.log(this.state.response);
        Alert.alert("Check your input");
      }
      else
      {
        console.log(this.state.response);
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
  logout(){
    this.setState({
      token:""
    });
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
            <Text>SignIn</Text>
        </Button>
        <Button onPress={this.logout.bind(this)}>
            <Text>Logout</Text>
        </Button>
        <Text>{this.state.token}</Text>
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

export default SignIn;
