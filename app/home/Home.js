/**
 * Created by chenjunjun
 * 主页
 */

import React,{Component} from 'react' ;
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'


var Home = React.createClass({

    getInitialState(){
        return{
            selectedTab:'home'
        }
    },
    render(){
        return(
            <View style={styles.container}>
                <Text>我是主页</Text>
            </View>
        );
    }
}) ;

const  styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
});
module.exports = Home
