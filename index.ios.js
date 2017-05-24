import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
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
  Icon
} from 'native-base';

import{
  NativeRouter,
  Route,
  Link
}from 'react-router-native';

import Get from './components/get.js'
import Post from './components/post.js'
import SignUp from './components/signup.js'
import SignIn from './components/signin.js'

export default class stuff extends Component {
  render() {
    return (
      <NativeRouter>
      <Container>
        <Header>
          <Body>
            <Title> Stuff </Title>
          </Body>
        </Header>
        <Content>
          <Route exact path="/" component={Get}/>
          <Route path="/post" component={Post}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
            <Link to="/">
              <View>
                <Icon name="home" />
              </View>
            </Link>
            </Button>
            <Button>
            <Link to="/post">
              <View>
                <Icon name="paw" />
              </View>
            </Link>
            </Button>
            <Button>
            <Link to="/signup">
              <View>
                <Icon name="person" />
              </View>
            </Link>
            </Button>
            <Button>
            <Link to="/signin">
              <View>
                <Icon name="person" />
              </View>
            </Link>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </NativeRouter>
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

AppRegistry.registerComponent('stuff', () => stuff);
