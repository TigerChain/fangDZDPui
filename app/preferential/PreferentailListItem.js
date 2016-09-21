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
    render() {
        return (
            <View style={styles.itemRootViewStyle}>
                <Image style={styles.imgStyle} source={{uri: 'http://qcloud.dpfile.com/pc/ihEhrhVg2ANSlr_UYRxHK0t4bp8EzaTOd85KKsdwRHp8ho6p7_gxi8ZVgPTI1Cd2TYGVDmosZWTLal1WbWRW3A.jpg'}}>

                </Image>
                <View style={styles.itemRightViewStyle}>
                    <View style={styles.itemRightTopViewStyle}>
                        <Text style={styles.titleStyle}>汉堡王</Text>
                        <Text>1.6KM</Text>
                    </View>
                    <Text>唐延路五道娕香。。。。。</Text>
                    <View style={styles.itemRightViewBottomViewStyle}>
                        <View style={styles.itemRightViewBottomLeftStyle}>
                            <Text style={styles.moneyStyle}>￥9</Text>
                            <View>
                                <View style={{backgroundColor: 'yellow',alignItems:'center'}}>
                                <Text >5折</Text>
                                    </View>
                                <Text>￥18</Text>
                            </View>
                        </View>
                        <Text>98%好评</Text>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemRootViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10
    },
    imgStyle: {
        width: itemHeight * 3 / 4,
        height: itemHeight * 3 / 4,
    },
    //条目右边的样式
    itemRightViewStyle: {
        justifyContent:'center',
        flex:1,
        marginLeft:7
    },
    //条目右边顶部View样式
    itemRightTopViewStyle: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    //条目右边底部View样式
    itemRightViewBottomViewStyle: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    //条目右边底部View左边View样式
    itemRightViewBottomLeftStyle:{
        flexDirection:'row',
        alignItems:'center'
    },
    moneyStyle:{
        fontSize:18,
        color:'orange',
        alignSelf:'flex-end'
    },
    //美食名字
    titleStyle:{
        fontSize:18,
        color:'black',
        fontWeight:'bold'
    }
});
