import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
// import flatListData from "./flatList"

var screen = Dimensions.get('window');
 export default class DetailList extends Component {
    constructor(props) {
        super(props);
    
    }

render() {
        return ( 
    <View style={{flex:1}}>

       <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
       <Image style={{width: width/3.3, height: 150 }} source={{uri: this.props.item.image}}/>
      <Text style={{fontSize:12,fontWeight:"bold"}}>{this.props.item.name}</Text>
      <Text style={{fontSize:8,fontWeight:"bold"}}>{this.props.item.foodDescription} </Text>
      </View>
                
            </View>
           
        );
    }
}

