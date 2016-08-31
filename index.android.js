/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Index = require('./app/main/Index') ;
class fangDZDPui extends Component {
  render() {
    return (
     <Index/>
    );
  }
}



AppRegistry.registerComponent('fangDZDPui', () => fangDZDPui);
