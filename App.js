/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';
import EditList from "./src/components/BasicFlatList"
export default class App extends Component{
  render() {
    return (

    <View style={{flex:1}}>
    <EditList/>
    </View>
        
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#F5FCFF',
  }
});
