/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
    Navigator,
} from 'react-native';
var Splash = require('./app/main/Spalsh') ;
class fangDZDPui extends Component {
  render() {
    return (
        //启动页里面封装了一个导航了,这样我就可以在启动页里面拿到导航来跳转了
        <Navigator
            initialRoute={{name:'spalsh',component:Splash}}
            configureScene={()=>{
              return Navigator.SceneConfigs.PushFromRight;
            }}

            renderScene={(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator} />;
            }}
        />
    );
  }
}



AppRegistry.registerComponent('fangDZDPui', () => fangDZDPui);
