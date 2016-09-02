/**
 * Created by chenjunjun 美食
 */

import React , {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native' ;

var Dimensions = require('Dimensions') ;
//取得屏幕宽度
var screenWidth = Dimensions.get('window').width;
var Food = React.createClass({

    render:function(){
        return(
            <View style={styles.container}>
                {this.renderTitleBar()}
            </View>
        );
    },
    renderTitleBar:function () {
        return(
            <View style={styles.titleBarStyle}>
                <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>this.popFood()}>
                <Image source={{uri:'food_ic_back_u'}} style={{width:13,height:13}}/>
                </TouchableOpacity>

                <View style={styles.titleCenterViewStyle}>
                    <TextInput
                        style={styles.titleCenterTextInputStyle}
                        inlineImageLeft="food_ic_search_label"
                        inlineImagePadding={5}
                        placeholder={'输入用户名、地点'}
                    ></TextInput>
                </View>
            </View>
        );
    },
    popFood:function () {
        this.props.navigator.pop();
    }
}) ;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dddddd'
    },
    //titleBar样式
    titleBarStyle:{
        height:47,
        backgroundColor: '#eeeeee',
        borderBottomWidth: 1.5,
        borderBottomColor: '#dddddd',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingLeft:3,
        paddingRight:3,

    },
    //为了实现圆角输入框,加了一个圆角view
    titleCenterViewStyle:{
        backgroundColor:'white',
        height:31,
        width:screenWidth*0.87,
        borderRadius:15,
        justifyContent:'center',
        borderWidth:0.5,
        borderColor:'#bbbbbb',
        marginRight:4
    },
    //目前没有发现TextInput可以设置背景图片,TextInput设置圆角不起作用,所以放在圆角view中并且其背景是透明的完美解决圆角TextInput
    titleCenterTextInputStyle:{
        flex:1,
        backgroundColor:"#00000000"
    },
}) ;

module.exports = Food