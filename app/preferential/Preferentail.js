/**
 * Created by chenjunjun
 * 品质优惠
 */

import React, {Component} from 'react' ;
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'


var HomeTopItemView = require('../home/HomeTopItemView')

//导入品质的模拟数据
var pingZhiTopDada = require('../data/pingZhiTopDada.json');

import TextAndArrowRightView from '../common/TextAndArrowRightView' ;

import TopViewAndText from './TopViewAndText' ;

import DeliciousImgView from './DeliciousImgView' ;

var Preferentail = React.createClass({

    render(){
        return (
            <View style={styles.container}>
                {/**渲染标题栏**/}
                {this.renderTitleBar()}
                <ScrollView>
                    <View style={styles.pingZhiTopViewStyle}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {this.renderHotPreferentail()}
                        </View>
                        <View
                            style={{flex: 1, height: 0.8, backgroundColor: '#dddddd', marginTop: 8, marginBottom: 8}}/>

                        <View style={styles.hotYouhuiViewStyle}>
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>热门优惠</Text>
                            <View style={{
                                marginLeft: 15,
                                marginRight: 15,
                                height: 15,
                                width: 0.8,
                                backgroundColor: '#dddddd'
                            }}/>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{color: 'orange', fontWeight: 'bold'}}>双从电影院,自且餐不用愁</Text>
                                <Text style={{color: 'black'}}>►</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.deliciousAllStyle}>

                        <View style={styles.deliciousViewStyle}>
                            <View style={{alignSelf: 'flex-start', marginTop: 5}}>
                                <TopViewAndText
                                    category="FOOD"
                                    title="美味"
                                    style={{color: 'orange', fontSize: 16, fontWeight: 'bold'}}
                                />
                            </View>


                            <DeliciousImgView
                                imgUrl="http://p1.meituan.net/deal/084b8ae1d14a5f94f16e38816cd0f70b160495.jpg"
                                floatText="特惠"
                                bottomText="自助餐"
                                personCount="3.4万人气"
                                style={{
                                    fontSize: 14,
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                            />

                            <DeliciousImgView
                                imgUrl="http://p0.meituan.net/deal/cd43b58a7f68508f3b4826e7ed4edf8148775.jpg"
                                floatText="订座"
                                bottomText="自助餐"
                                personCount="3.4万人气"
                                style={{
                                    fontSize: 14,
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                            />
                            <DeliciousImgView
                                imgUrl="http://i1.s2.dpfile.com/pc/0bc7cd35c002881e31bca96e8780ff37(700x700)/thumb.jpg"
                                floatText="霸王餐"
                                bottomText="自助餐"
                                personCount="3.4万人气"
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                            />


                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1, marginTop: 10}}>
                            <TextAndArrowRightView
                                title="全部17个美味专题"
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    },
    /**
     * 渲染标题栏
     */
    renderTitleBar(){
        return (
            <View style={styles.titleBarViewStyle}>
                <Text style={styles.titleLeftTitleStyle}>西安</Text>
                <Image source={{uri: 'navibar_icon_arrow_down_ed'}} style={{width: 13, height: 8}}/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: 'main_quality_title'}} style={{width: 110, height: 25}}></Image>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> {
                        this.searchClick()
                    }}>
                    <View style={{width: 30}}>
                        <Image source={{uri: 'main_ic_home_search'}} style={{width: 20, height: 20}}></Image>
                    </View>
                </TouchableOpacity>
            </View>
        );
    },
    searchClick(){
        alert('点击搜索');
    },
    /**
     * 渲染热门优惠布局
     */
    renderHotPreferentail(){
        var pingZhiView = [];
        var pingZhiDatas = pingZhiTopDada.data;

        for (var i = 0; i < pingZhiDatas.length; i++) {
            var icon = pingZhiDatas[i].icon;
            var title = pingZhiDatas[i].title;
            pingZhiView.push(
                <View key={i} style={{flex: 1}}>
                    <HomeTopItemView
                        renderIcon={{uri: icon}}
                        text={title}
                        position={i}
                        onclick={this.omItemClick}
                    />
                </View>
            )
        }
        return pingZhiView;
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd'
    },
    titleBarViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.8,
        height: 47,
        paddingLeft: 3,
        paddingRight: 3,
    },
    //左边文字的样式
    titleLeftTitleStyle: {
        color: 'orange',
        fontSize: 16,
        marginRight: 5
    },
    titlebarCenterTextStyle: {
        fontSize: 14,
        color: 'black',
    },
    //品质顶部view的样式
    pingZhiTopViewStyle: {
        backgroundColor: 'white',
        padding: 10
    },
    //热门优惠布局
    hotYouhuiViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    //美味所在布局
    deliciousAllStyle: {
        backgroundColor: 'white',
        padding: 8,
        marginTop: 12
    },
    //美味布局
    deliciousViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});


module.exports = Preferentail
