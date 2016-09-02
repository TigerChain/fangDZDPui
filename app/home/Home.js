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
    ScrollView
} from 'react-native';

/**引入三方模块*/
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
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
var vMargin =25;

var Home = React.createClass({

    /**
     * 设置默认值,只加载一次
     * @returns {{selectedTab: string}}
     */
    getInitialState(){
        return {
            selectedTab: 'home'
        };

    },
    render: function () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <IndicatorViewPager
                        style={{height: 200}}
                        indicator={this.renderDotIndicator()}
                    >
                        {this.renderViewPager()}
                    </IndicatorViewPager>
                </ScrollView>
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
                <View key={i} style={styles.itemPagerIconStyle}>
                    <Image source={{uri:imgRes}} style={{width:40,height:40}}></Image>
                    <Text style={styles.itemTextStyle}>{title}</Text>
                </View>
            )
        }
        return imgInfoViews ;
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
    itemTextStyle:{
        fontSize:12,
        color:'black',
        marginTop:5
    }

});

module.exports = Home
