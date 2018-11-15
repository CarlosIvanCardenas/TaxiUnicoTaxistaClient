'use strict'

import React, { Component } from 'react'
import { Actions } from "react-native-router-flux";
import {
  View,
  Text,
  Image,
  Alert,
  TouchableHighlight,
  TextInput
} from 'react-native'
import commonStyles from "../styles/common.css";

class loginView extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    async login(){
        try {
            let response = await fetch('http://206.189.164.14/api/taxistas/login/'+this.state.email+'/'+this.state.password);
            if(response.ok){
                let responseJson = await response.json();
                if (responseJson != null) {
                    Actions.dashboard()
                }
                else {
                    Alert.alert('Correo o contraseña incorrectos');
                }
            }
            else {
                Alert.alert('Correo o contraseña incorrectos');
            }
          } 
          catch (error) {
            alert(error);
          }
    }

    render() {
        return(
                <View style={commonStyles.container} >
                    <Image style={commonStyles.logo} source={require('../../assets/img/logo.png')} />
                    <TextInput 
                        style={commonStyles.input} 
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholder={'Correo electrónico'}
                        placeholderTextColor="white"
                        underlineColorAndroid='transparent'
                    />
                    <TextInput  
                        style={commonStyles.input}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder={'Contraseña'}
                        secureTextEntry={true}
                        placeholderTextColor="white"
                        underlineColorAndroid='transparent'
                    />
                    <TouchableHighlight onPress={this.login.bind(this)} style={commonStyles.boton} >
                        <Text style={commonStyles.textoBoton} >Iniciar sesión</Text>
                    </TouchableHighlight>
                    <Text style={commonStyles.register} onPress={() => Actions.signup()} > No tienes cuenta? </Text>
                </View>
        )
    }
}

module.exports = loginView;