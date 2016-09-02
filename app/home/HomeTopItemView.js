/**
 * Created by chenjunjun
 * 首页轮播图中每个条目View的封装
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
} from 'react-native' ;

var HomeTopItemView = React.createClass({
    //规范组件传过来的类型
    propTypes: {
        renderIcon: React.PropTypes.object.isRequired, //图片必填
        text: React.PropTypes.string,  // 标题
        position: React.PropTypes.number,  // 位置
        onclick: React.PropTypes.func  // 回调函数
    },
    onclick:function () {
        if(this.props.onclick){
            this.props.onclick(this.props.text, this.props.position);
        }
    },
    render:function(){
        return(
            <TouchableWithoutFeedback onPress={this.onclick}>
                <View style={styles.container}>
                    <Image style={styles.icon} source={this.props.renderIcon}/>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
});

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    icon: {
        width: 40,
        height: 40,
    },
    text: {
        fontSize: 12,
        color:'black',
        marginTop:5
    }
});

module.exports = HomeTopItemView


