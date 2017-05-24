import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
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

class Get extends Component {
  constructor(props){
    super(props);
    const url = "https://pure-ravine-38367.herokuapp.com/api/user/?format=json";
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 !== row2,
      }),
      loaded: false,
      url: url,
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(this.state.url)
    .then((response) => response.json())
    .then((responseData) =>{
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        loaded: true,
      });
    }).catch((error) =>{
      console.log(error);
    }).done();
  }

  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderData}
        />
    );
  }

  renderLoadingView(){
    return(
    <View>
      <Text>
        Loading Data...
      </Text>
    </View>
    )
  }

  renderData(obj){
    return(
      <View>
        <Card>
          <CardItem>
            <Text>{obj.username}</Text>
          </CardItem>
          <CardItem>
            <Text>{obj.email}</Text>
          </CardItem>
          <CardItem>
            <Text>{obj.first_name}</Text>
          </CardItem>
          <CardItem>
            <Text>{obj.last_name}</Text>
          </CardItem>
        </Card>
      </View>
    )
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

export default Get;
