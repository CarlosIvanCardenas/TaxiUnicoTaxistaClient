'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList
} from 'react-native'
import commonStyles from "../styles/common.css";
import Icon from 'react-native-vector-icons/FontAwesome';

class MyTasks extends Component{
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }
    
    ready(index){
        // console.log(this.state.items[index].current)
        // var next = this.state.items[index].members.indexOf(this.state.items[index].current) + 1;
        // if (next == this.state.items[index].members.length){
        //     next = 0
        // }
        // this.state.items[index].current = this.state.items[index].members[next]
        // firebase.database().ref().child('users').child(user.uid).set({
        //     current: this.state.items[index].members[next]
        // });
        // console.log(this.state.items[index].current)
    }

    render(){
        return(
            <View style={styles.container} >
                <FlatList
                    data={this.state.items}
                    renderItem={({item, index}) => 
                        <View style={styles.item}>
                            <Text style={styles.itemTitle} >Tarea: {item.name}</Text>
                            <Text style={styles.itemTitle} >Turno de: {item.current}</Text>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'flex-end'}} >
                                <Icon 
                                    style={{ marginLeft: 10}}
                                    name="check-square" 
                                    size={40} 
                                    color="green" 
                                    onPress={this.ready.bind(this,index)}
                                />
                                <Icon 
                                    style={{ marginLeft: 10}}
                                    name="window-close" 
                                    size={40} 
                                    color="red" 
                                    //onPress={this.onLogOut.bind(this)}
                                />
                            </View>
                        </View>
                    }
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 25,
        backgroundColor: '#1f2229',
    },
    item: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 15,
        
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 15
    },
    itemTitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

module.exports = MyTasks;