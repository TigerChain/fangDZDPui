/**
 * Created by chenjunjun
 * 品质优惠
 */

import React,{Component} from 'react' ;
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'


var Preferentail = React.createClass({

    getInitialState(){
        return{
            selectedTab:'home'
        }
    },
    render(){
        return(
            <View style={styles.container}>
                <Text>品质优惠</Text>
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


module.exports = Preferentail
