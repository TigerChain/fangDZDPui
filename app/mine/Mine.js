/**
 * Created by chenjunjun
 * 我的
 */

import React, {Component} from 'react' ;
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'

var CommonListItem = require('../common/CommonListItem');
var ImageWithText = require('../common/ImageWithText') ;
var Mine = React.createClass({

    render(){
        return (
            <View style={styles.container}>
                {this.renderTitleBar()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>

                    <View >
                        <CommonListItem
                            itemLeftIcon="movie_default_avatar_actor"
                            itemLeftTitle="点击登录"
                            itemRightTitle="登录享优惠"
                            itemLeftIconStyle="50"
                            itemLeftViewHeight="80"
                        />
                    </View>

                    {/**我的点评等布局**/}
                <View style={styles.imgViewStyle}>
                    <ImageWithText
                        imgRes="main_my_dianping_user_icon_normal"
                        imgDes="我的点评"
                    />

                    <ImageWithText
                        imgRes="main_my_favorite_user_icon_normal"
                        imgDes="我的收藏"
                    />

                    <ImageWithText
                        imgRes="main_my_coupon_user_icon_normal"
                        imgDes="我的团购卷"
                    />
                </View>
                    <View style={{marginTop: 15}}>
                        <CommonListItem
                            itemLeftIcon="main_index_home_normal"
                            itemLeftTitle="我的订单"
                        />
                        <CommonListItem
                            itemLeftIcon="main_index_home_normal"
                            itemLeftTitle="我的钱包"
                        />
                        <CommonListItem
                            itemLeftIcon="main_index_home_normal"
                            itemLeftTitle="我的卡卷"
                            itemRightTitle="抵用卷/现金卷"
                        />
                        <CommonListItem
                            itemLeftIcon="main_index_home_normal"
                            itemLeftTitle="我的积分"
                            itemRightTitle="8月16日停发评价积分"
                        />
                    </View>

                    <View style={{marginTop: 15}}>
                        <CommonListItem
                            itemLeftIcon="main_index_home_normal"
                            itemLeftTitle="待点评"
                        />

                    </View>
                    <View style={{marginTop: 15}}>
                        <CommonListItem
                            itemLeftIcon="main_index_home_normal"
                            itemLeftTitle="好友去哪"
                        />
                        <CommonListItem
                            itemLeftIcon="main_index_home_normal"
                            itemLeftTitle="找好友"
                        />
                    </View>
                    <View style={{marginTop: 15}}>
                        <CommonListItem
                            itemLeftIcon="main_index_home_normal"
                            itemLeftTitle="最近浏览"
                        />
                        <CommonListItem
                            itemLeftIcon="main_index_home_normal"
                            itemLeftTitle="设置"
                        />
                    </View>
                    <View style={{marginTop: 15}}>
                        <CommonListItem
                            itemLeftIcon="main_index_home_normal"
                            itemLeftTitle="我是商家"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },
    //生成titlebar
    renderTitleBar: function () {
        return (
            <View style={styles.titleBarStyle}>
                <Text style={styles.leftTitleStyle}>联系客服</Text>
                <Text style={styles.titleBarCenterTitleStyle}>我的</Text>
                <Image source={{uri: 'main_personal_navibar_icon_message'}} style={styles.topbarRightIconStyle}></Image>
            </View>
        );
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd'
    },
    //titlebar样式
    titleBarStyle: {
        height: 47,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#eeeeee',
        borderBottomWidth: 1.5,
        borderBottomColor: '#dddddd'
    },
    //左边文本样式
    leftTitleStyle: {
        color: 'orange',
        marginLeft: 10
    },
    //中间文本样式
    titleBarCenterTitleStyle: {
        color: 'black'
    },
    //右边图片样式
    topbarRightIconStyle: {
        width: 22,
        height: 22,
        marginRight: 10
    },
    imgViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        paddingTop:5,
        paddingBottom:5,
        borderBottomWidth:0.5,
        borderBottomColor:'#eeeeee',

    },
});
module.exports = Mine
