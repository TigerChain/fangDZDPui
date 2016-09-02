/**
 * Created by chenjunjun
 * 带文字描述的图片
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native' ;

var ImageWithText = React.createClass({
    getDefaultProps(){
      return{
          //图片资源
          imgRes:'',
          //图片描述
          imgDes:''
      }
    },
    render(){
        return(


            <View style={styles.imgViewStyle}>
                <Image  source={{uri:this.props.imgRes}} style={styles.imgStyle}></Image>
                <Text>{this.props.imgDes}</Text>
            </View>

        );
    }
});

const styles = StyleSheet.create({
    //一个图文view的样式
    imgViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:0.4,
        borderRightColor:'#eeeeee',
    },
    //图文中图片的样式
    imgStyle:{
        width:30,
        height:30,
        marginBottom:5
    }
}) ;

module.exports = ImageWithText