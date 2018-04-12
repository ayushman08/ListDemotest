import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight } from 'react-native';

import Swipeout from 'react-native-swipeout';


import EditModal from './EditModal';
import flatListData from "./flatList"


class FlatListItem extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };          
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                 numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });        
    }

    render() {   
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }              
            },          
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },      
            right: [
                { 
                    onPress: () => {                            
        
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    }, 
                    text: 'Edit', type: 'primary' 
                },
                
            ],  
            rowId: this.props.index, 
            sectionId: 1    
        };               
        return (  
             <Swipeout {...swipeSettings}>
                <View style={{
                flex: 1,
                flexDirection:'column',                                
                }}>            
                    <View style={{
                            flex: 1,
                            flexDirection:'row',
                            backgroundColor: 'mediumseagreen'
                    }}>            
                        <Image 
                            source={{uri: this.props.item.imageUrl}}
                            style={{width: 100, height: 100, margin: 5}}
                        >

                        </Image>
                        <View style={{
                                flex: 1,
                                flexDirection:'column',   
                                height: 100                 
                            }}>            
                                <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                                <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                        </View>              
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor:'white'                            
                    }}>
                
                    </View>
                </View>   
            </Swipeout>      
            
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,  
    }
});


// class FlatListItem extends Component {
//     // passIndex(itemindex){
//     // this.props.getItemIndex(itemindex)
//     // } 
    
//     navigateTocategory(item){
//     Actions.detaillist({item}) 
//     } 
    
//     render() { 
//     return (
//     <TouchableWithoutFeedback onPress= {this.navigateTocategory.bind(this, this.props.item)}>
//     <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
//     <Image style={{width: width/3.3, height: 150 }} source={{uri: this.props.item.image}}/>
//     <Text style={{fontSize:12,fontWeight:"bold"}}>{this.props.item.name}</Text>
//     <Text style={{fontSize:8,fontWeight:"bold"}}>{this.props.item.foodDescription} </Text>
//     </View>
//     </TouchableWithoutFeedback>
//     );
//     }
//     }



export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);     
        this.state = ({
            deletedRowKey: null,            
        });
               
    }

    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        }); 
    }

  
    render() {
      return (
        <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
            <View style={{
                backgroundColor: 'tomato', 
                flexDirection: 'row',
                justifyContent:'flex-end',                
                alignItems: 'center',
                height: 64}}>
             
            </View>
            <FlatList 
                ref={"flatList"}
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index} parentFlatList={this}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
            <EditModal ref={'editModal'} parentFlatList={this}>

            </EditModal>
        </View>
      );
    }
}