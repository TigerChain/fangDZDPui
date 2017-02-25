/**
 * Created by chenjunjun
 * 新人专区条目的View
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback
} from 'react-native' ;

var NewPersonItem = React.createClass({
    //传入属性的规范
    propTypes: {
        renderTitle: React.PropTypes.string,//标题
        renderCenterText: React.PropTypes.string, //中间的标题
        renderIcon: React.PropTypes.string.isRequired, //图片,
        renderPosition: React.PropTypes.number,//位置
        onItemClick: React.PropTypes.func //点击事件
    },
    //设置一些默认的值
    getDefaultProps(){
        return {
            renderTitle: '标题',
            renderCenterText: '中间标题',
            renderPosition: 0,
            renderIcon: 'http://www.dpfile.com/sc/ares_pics/3b04f0378206914dfbcf9249e05f5b22.png'
        }
    },
    //点击事件
    onItemClick: function () {
        if (this.props.onItemClick) { //如果声明了,则就回调出去
            this.props.onItemClick(this.props.renderPosition);
        }
    },
    render: function () {
        return (
            <TouchableWithoutFeedback onPress={this.onItemClick}>
                <View style={styles.itemViewStyle}>
                    <Text>{this.props.renderTitle}</Text>
                    {this.renderCenterView()}
                    <Image source={{uri: this.props.renderIcon}} style={styles.itemBottomImgStyle}/>
                </View>
            </TouchableWithoutFeedback>
        );
    },
    /**
     * 渲染中间的View
     */
    renderCenterView: function () {
        return (
            <View style={styles.centerViewStyle}>
                <Text style={styles.itemTextViewStyle}>{this.props.renderCenterText}</Text>
            </View>
        )
    }
});


const styles = StyleSheet.create({
    //整体view的样式
    itemViewStyle: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flex: 1,
        margin: 3
    },
    //中间View的样式
    centerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
        marginTop: 8,
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 2,
        paddingBottom: 2
    },
    //中间view中图片的样式
    itemTextViewStyle: {
        fontSize: 10,
        flex: 1,
        justifyContent: 'center'
    },
    //底剖图片的样式
    itemBottomImgStyle: {
        width: 40,
        height: 40,
        marginTop: 7
    }
});

module.exports = NewPersonItem
