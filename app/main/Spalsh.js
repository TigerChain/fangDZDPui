/**
 * Created by chenjunjun
 * 启动页
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native' ;
var Index = require('./Index');
var Spalsh = React.createClass({
    render:function(){
        return(
            <View style={{flex:1}}>
                <Image source={{uri:'ic_splash_screen'}} style={styles.splashImgStyle}></Image>
            </View>
        );
    },
    componentDidMount:function() {
        //2秒种跳转到Index界面
        setTimeout(()=>{
            //2秒钟直接跳转到 Index
            this.props.navigator.replace({
                component:Index
            }) ;
        },2000) ;
    }
});

const  styles = StyleSheet.create({
    splashImgStyle:{
        flex:1,
    }
});


module.exports = Spalsh
