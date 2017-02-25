/**
 * Created by chenjunjun
 * 美食中分类查找的View
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native' ;

var CategoryView = React.createClass({

    getDefaultProps(){
        title:''
    },
    render(){
        return(
            <View style={styles.categoryViewStyle}>
                <Text style={styles.cateGoryTitleStyle}>{this.props.title}</Text>
                <Image source={{uri:'cashier__unfold_arrow_normal'}} style={styles.iconStyle}></Image>
            </View>
        );
    }
});

const  styles = StyleSheet.create({
    categoryViewStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderRightWidth:0.4,
        borderRightColor:'#eeeeee',
        justifyContent:'center',
    },
    iconStyle:{
        width:13,
        height:8,
        marginLeft:5,
        marginRight:2
    },
    cateGoryTitleStyle:{
        color:'black',
        fontSize:12.5,
        marginLeft:2
    }
}) ;

module.exports = CategoryView