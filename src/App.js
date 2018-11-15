/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = require('./components/loginView')
const Signup = require('./components/signupView')
const Dashboard = require('./components/dashboardView')

const myIcon = (<Icon name="arrow-left" size={30} color="white" onPress={() => Actions.login()} />)

export default class Roomie extends Component {

  render() {
    return (
      <Router  >
        <Scene key="root" navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} renderLeftButton={myIcon} >
          <Scene key="login" component={Login} title="Login" initial={true} hideNavBar={true} />
          <Scene key="signup" component={Signup} title="Sign Up"  />
          <Scene key="dashboard" component={Dashboard} title="Dashboard" hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#1f2229', 
    paddingLeft: 20
  },
  navTitle: {
    color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
  },
});