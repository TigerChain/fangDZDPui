/**
 * Created by chenjunjun
 * 主页
 */

import React, {Component} from 'react' ;
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TextInput
} from 'react-native';

/**引入三方模块*/
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
//引入数据源
var HomeViewPagerData = require('../data/homeViewPagerData.json');

var Dimensions = require('Dimensions') ;
//取得屏幕宽度
var screenWidth = Dimensions.get('window').width;
//每行显示的图片数
var clos = 5 ;
//包含图片view的宽度
var itemViewHeight = 60 ;
//水平间距
var hMargin = (screenWidth - clos*itemViewHeight)/(clos+1) ;
//垂直间距
var vMargin =15;

//引入封装好的图片文组件,并且自带点击事件
var HomeTopItemView = require('./HomeTopItemView') ;

var ToastAndroid = require('ToastAndroid');

var Food = require('./food/Food') ;

var Home = React.createClass({

    render: function () {
        return (
            <View style={styles.container}>
                {this.rednerTitleBar()}
                <ScrollView>
                    <IndicatorViewPager
                        style={{height: 180}}
                        indicator={this.renderDotIndicator()}
                    >
                        {this.renderViewPager()}
                    </IndicatorViewPager>
                </ScrollView>
            </View>
        );
    },
    //生成titleBar
    rednerTitleBar:function(){
        return(
            <View style={styles.titleBarStyle}>
                <Text style={styles.titleLeftTitleStyle}>西安</Text>
                <Image source={{uri:'title_home_arrow_down_normal'}} style={{width:13,height:8}}/>
                <View style={styles.titleCenterViewStyle}>
                    <TextInput
                        style={styles.titleCenterTextInputStyle}
                        inlineImageLeft="main_ic_home_search"
                        inlineImagePadding={5}
                        placeholder={'输入商城、地点'}
                    ></TextInput>
                </View>
                <Image source={{uri:'main_home_navibar_icon_add'}} style={{width:20,height:20}}/>
            </View>
        );
    },
    /**
     * 渲染每个Pager的view
     * @returns {Array}
     */
    renderViewPager:function () {
        var itemPagerView = [];
        var data =  HomeViewPagerData.data;
        for(var i = 0;i<data.length;i++){
            itemPagerView.push(
              <View key={i} style={styles.viewPagerStyle}>
                  {this.renderItemPager(data[i].imginfo)}
              </View>
            );
        }
        return itemPagerView ;
    },
    /**
     * 渲染每个pager中的图片和标题view
     * @param imgInfos
     * @returns {Array}
     */
    renderItemPager:function (imgInfos) {
        var imgInfoViews = [] ;
        for(var i = 0;i<imgInfos.length;i++){
            var itemImgInfo = imgInfos[i];
            var title = itemImgInfo.title ;
            var imgRes  = itemImgInfo.icon ;
            imgInfoViews.push(
                <View  key={i} style={styles.itemPagerIconStyle}
                >
                    <HomeTopItemView
                        renderIcon={{uri:imgRes}}
                        text={title}
                        position={i}
                        onclick={this.omItemClick}
                    />
                </View>

                // <View key={i} style={styles.itemPagerIconStyle}>
                //     <Image source={{uri:imgRes}} style={{width:40,height:40}}></Image>
                //     <Text style={styles.itemTextStyle}>{title}</Text>
                // </View>
            )
        }
        return imgInfoViews ;
    },
    omItemClick:function (text,position) {
        switch (position){
            case 0:
                this.props.navigator.push({
                    component:Food
                }) ;
                break ;
            case 1:
                break ;
        }
        ToastAndroid.show('你点击了 '+text+";第"+(position+1)+" 张图片",ToastAndroid.SHORT);
    },
    /**
     * 返回指示器方法
     * @returns {XML}
     */
    renderDotIndicator:function() {
        return <PagerDotIndicator pageCount={HomeViewPagerData.data.length}
                                  selectedDotStyle={{backgroundColor: 'red'}}
        />;
    }
});

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#dddddd'
    },
    //titleBar样式
    titleBarStyle:{
        height:47,
        backgroundColor:'rgba(255,81,0,1)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingLeft:3,
        paddingRight:3
    },
    //左边文字的样式
    titleLeftTitleStyle:{
        color:'white',
    },
    //为了实现圆角输入框,加了一个圆角view
    titleCenterViewStyle:{
        backgroundColor:'white',
        height:32,
        width:screenWidth*0.72,
        borderRadius:15,
        justifyContent:'center'
    },
    //目前没有发现TextInput可以设置背景图片,TextInput设置圆角不起作用,所以放在圆角view中并且其背景是透明的完美解决圆角TextInput
    titleCenterTextInputStyle:{
        flex:1,
        backgroundColor:"#00000000"
    },
    //viewPager样式
    viewPagerStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        flexWrap:'wrap'
    },
    //viewpager中每个子图片和文字所在view的样式
    itemPagerIconStyle:{
        width:itemViewHeight,
        height:itemViewHeight,
        marginLeft:hMargin,
        marginTop:vMargin,
        alignItems:'center'
    },
    // //viewPager每而中每个我条目的Text颜色
    // itemTextStyle:{
    //     fontSize:12,
    //     color:'black',
    //     marginTop:5
    // }
});

module.exports = Home
