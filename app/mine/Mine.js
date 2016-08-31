/**
 * Created by chenjunjun
 * 我的
 */

import React,{Component} from 'react' ;
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'


var Mine = React.createClass({

    getInitialState(){
        return{
            selectedTab:'home'
        }
    },
    render(){
        return(
            <View style={styles.container}>
                <Text>我的</Text>
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
module.exports = Mine
