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

class Post extends Component {
  constructor(props){
    super(props);
    const url = "https://pure-ravine-38367.herokuapp.com/api/user/?format=json";
    this.state = {
      status: "",
      response: "",
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      url: url
    }
  }

  postData(username, first_name, last_name, email){
    fetch(this.state.url, {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        "username": username,
        "first_name": first_name,
        "last_name": last_name,
        "email": email
      })
    }).then((response) =>{
      this.setState({
        response:response,
        status:response.status
      });
      if(response.status === 201)
      {
        Alert.alert("Created!");
      }
      else if(response.status === 400)
      {
        Alert.alert("Check your input");
      }
      else
      {
        Alert.alert("Failed, please try again later!");
      }
    }).catch((error) =>{
      console.log(error);
      Alert.alert("Something went wrong!");
    })
    .done();
  }

  onButtonPress(){
    this.postData(this.state.username,
      this.state.first_name,
      this.state.last_name,
      this.state.email);
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
        placeholder="first_name"
        onChangeText={(first_name) => this.setState({first_name})}
        />
        <TextInput
        style={{height:40}}
        placeholder="last_name"
        onChangeText={(last_name) => this.setState({last_name})}
        />
        <TextInput
        style={{height:40}}
        placeholder="email"
        onChangeText={(email) => this.setState({email})}
        />
        <Button onPress={this.onButtonPress.bind(this)}>
            <Text>Submit</Text>
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

export default Post;
