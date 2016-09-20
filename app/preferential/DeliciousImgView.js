/**
 * Created by chenjunjun
 * 美味图片点评组件
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native' ;

export default class DeliciousImgView extends React.Component {

    static defaultProps = {
        imgUrl: '', //图片的地址
        floatText: '',//顶部悬浮是折扣还是啥的字样
        bottomText: '', //底部介绍 文本,
        personCount: '',//人气数
        style:Text.prototype.style
    }

    render() {
        return (
            <View style={styles.rootViewStyle}>
                <View style={styles.containerImageViewStyle}>
                    <Image source={{uri: this.props.imgUrl}} style={{flex: 1}}/>
                    <View style={styles.containerTextViewStyle}>
                        <Text style={{color: 'white'}}>{this.props.bottomText}</Text>
                    </View>
                </View>
                <View style={styles.topFloatViewStyle}>
                    <Text style={styles.topFloatTextStyle}>coupon</Text>
                    <Text style={this.props.style}>{this.props.floatText}</Text>
                </View>
                <View>
                    <Text style={styles.perseonCountViewStyle}>{this.props.personCount}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //根View
    rootViewStyle: {
        flex: 1,
        margin: 3
    },
    //包含图片View
    containerImageViewStyle: {
        flex: 1,
        height: 120
    },
    //包含文本介绍 View
    containerTextViewStyle: {
        backgroundColor: 'black',
        margin: 7,
        position: 'relative',
        marginTop: -25,
        alignItems: 'center'
    },
    //顶部悬浮view
    topFloatViewStyle: {
        backgroundColor: 'yellow',
        width: 45,
        height:40,
        position: 'absolute',
        alignItems: 'center',
        marginLeft: 5,
        top: -5,
        paddingBottom:7,
        paddingRight:5,
        paddingTop:5,
        paddingLeft:5
    },
    topFloatTextStyle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'orange'
    },
    perseonCountViewStyle:{
        alignSelf:'center',
        color:'orange',
        fontWeight:'bold'
    }

});
