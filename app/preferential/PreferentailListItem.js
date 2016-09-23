/**
 * Created by chenjunjun
 * 品质优惠列表组件
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native' ;

import CommonUtils from  '../common/Constants' ;

const itemHeight = CommonUtils.window.width / 3;

export default class PreferentailListItem extends React.Component {

    //规范传递过来的属性
    static propTypes = {
        itemImgUrl: React.PropTypes.string.isRequired, //图片地址
        itemName: React.PropTypes.string,//名字
        itemKm: React.PropTypes.string,//距离
        itemAddress: React.PropTypes.string,//地址
        itemZheHouPrice: React.PropTypes.string,//折后价
        itemZheKou: React.PropTypes.string,//折扣
        itemYuanPrice: React.PropTypes.string,//原价
        itemHaoPingPersent: React.PropTypes.string,//好评百分比  此字段可有可无
    }

    render() {
        return (
            <View style={styles.itemRootViewStyle}>
                <Image style={styles.imgStyle} source={{uri: this.props.itemImgUrl}}/>
                <View style={styles.itemRightViewStyle}>
                    <View style={styles.itemRightTopViewStyle}>
                        <Text style={styles.titleStyle}
                              numberOfLines={1}>{this.props.itemName}</Text>
                        <Text>{this.props.itemKm}</Text>
                    </View>
                    <Text
                        style={styles.addressTextStyle}
                        numberOfLines={1}>
                        {this.props.itemAddress}
                    </Text>
                    <View style={styles.itemRightViewBottomViewStyle}>
                        <View style={styles.itemRightViewBottomLeftStyle}>
                            <Text style={styles.moneyStyle}>{this.props.itemYuanPrice}</Text>
                            <View style={{marginLeft: 5, marginTop: 5}}>
                                <View style={{backgroundColor: '#ff8c00', alignItems: 'center', width: 30}}>
                                    <Text style={{fontSize: 10, color: 'white'}}>{this.props.itemZheKou}</Text>
                                </View>
                                <Text>{this.props.itemZheHouPrice}</Text>
                            </View>
                        </View>
                        {/**好评数View**/}
                        {this.renderPersonCount()}
                    </View>
                </View>
            </View>
        );
    }

    /**
     * 渲染好评百分比
     * @returns {XML}
     */
    renderPersonCount() {
        if (this.props.itemHaoPingPersent.length != 0) {
            return ( <Text style={{alignSelf: 'flex-end'}}>{this.props.itemHaoPingPersent + '好评'}</Text>);
        }
    }
}

const styles = StyleSheet.create({
    //条目的根布局
    itemRootViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    //图片的样式
    imgStyle: {
        width: itemHeight * 3 / 4,
        height: itemHeight * 3 / 4,
        resizeMode: Image.resizeMode.stretch
    },
    //条目右边的样式
    itemRightViewStyle: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 7
    },
    //条目右边顶部View样式
    itemRightTopViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    //条目右边底部View样式
    itemRightViewBottomViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    //条目右边底部View左边View样式
    itemRightViewBottomLeftStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    moneyStyle: {
        fontSize: 18,
        color: '#ff6347',
        alignSelf: 'flex-end'
    },
    //美食名字
    titleStyle: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        width: CommonUtils.window.width * 0.4
    },
    //地址样式
    addressTextStyle: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
    }
});
