/**
 * Created by chenjunjun
 * 发现
 */

import React,{Component} from 'react' ;
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'


var Find = React.createClass({

    getInitialState(){
        return{
            selectedTab:'home'
        }
    },
    render(){
        return(
            <View style={styles.container}>
                <Text>发现</Text>
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
module.exports = Find
