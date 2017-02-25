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
    ScrollView,
    ListView
} from 'react-native'


var HomeTopItemView = require('../home/HomeTopItemView')

//导入品质的模拟数据
var pingZhiTopDada = require('../data/pingZhiTopDada.json');

//引入向右箭头和文本组件
import TextAndArrowRightView from '../common/TextAndArrowRightView' ;

//引入顶部的FOOD 美味样式的图片组件
import TopViewAndText from './TopViewAndText' ;

//引入美味图片的组件
import DeliciousImgView from './DeliciousImgView' ;

//导入品质优惠条目组件
import PreferentailListItem from './PreferentailListItem';

//引入品质优惠模拟数据
var preferentailTopData = require('../data/preferentailTopData.json');

var Preferentail = React.createClass({

    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            topData: [],
            listDataSource: ds
        }
    },

    //处理耗时操作
    componentDidMount() {
        //这里应该是请求服务器,我在这里模拟一下请求数据  改变状态
        this.setState({
            topData: preferentailTopData.data
        });

        this.getListData();
    },
    getData: function () {
        var dataBlob = [];
        for (let i = 0; i < 20; i++) {
            dataBlob.push("haha" + i);
        }
        return dataBlob;
    },
    getListData(){
        var listDatas = [];
        this.setState({
            listDataSource: this.state.listDataSource.cloneWithRows(this.getData())
        });
    },
    render(){
        return (
            <View style={styles.container}>
                {/**渲染标题栏**/}
                {this.renderTitleBar()}
                <ScrollView>
                    {/**渲染顶部View*/}
                    {this.renderTopView()}
                    {/**渲染顶部三张图片和两个列表的三个View**/}
                    {this.renderTopImgsInfoView()}

                    <Text style={{marginLeft: 10, fontSize: 16, marginTop: 5, marginBottom: 5}}>优惠精选</Text>
                    {/**底部的List条目**/}
                    <ListView
                        style={{backgroundColor: 'white', padding: 10}}
                        dataSource={this.state.listDataSource}
                        renderRow={this.renderRow}
                    />

                </ScrollView>
            </View>
        );
    },
    renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=> {
                    ToastAndroid.show('你点击了 ' + rowID, ToastAndroid.SHORT)
                }}>
                <PreferentailListItem
                    itemImgUrl={"http://i1.s2.dpfile.com/pc/e1508111d8bfa1fc37902bf0f365de24(700x700)/thumb.jpg"}
                    itemName={"吉朗丽大酒店"}
                    itemKm={"483m"}
                    itemAddress={"[唐延路沿线]午市自助餐"}
                    itemZheHouPrice={"￥128"}
                    itemZheKou={"6.8折"}
                    itemYuanPrice={"￥188"}
                    itemHaoPingPersent={"%98"}/>
            </TouchableOpacity>
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
     * 渲染顶部包括图片的View
     * @returns {XML}
     */
    renderTopImgsInfoView(){
        var datas = this.state.topData;
        if (datas != 0) {
            return (
                <View>
                    {this.renderItemImgsInfoView(datas)}
                </View>
            );
        } else {
            //应该是显示 loading
        }
    },
    /**
     * 渲染每一个图片信息View
     */
    renderItemImgsInfoView(datas){
        var itemImgsInfoView = [];
        for (var i = 0; i < datas.length; i++) {
            itemImgsInfoView.push(
                <View style={styles.deliciousAllStyle} key={i}>
                    {/**渲染美味顶部View**/}
                    {this.renderDeliciousTopView(datas[i])}
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1, marginTop: 10}}>
                        <TextAndArrowRightView
                            title={datas[i].topMore}/>
                    </View>
                    {/**渲染美味底部View**/}
                    {this.renderDeliciousBottomView(datas[i])}
                </View>
            )
        }
        return itemImgsInfoView
    },
    /**
     * 渲染顶部View
     * @returns {XML}
     */
    renderTopView(){
        return (
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
            </View>);
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
                        onclick={this.omItemClick}/>
                </View>
            )
        }
        return pingZhiView;
    },
    /**
     * 渲染美味顶部View
     * @returns {XML}
     */
    renderDeliciousTopView(topDataItem){
        return (
            <View style={styles.deliciousViewStyle}>
                <View style={{alignSelf: 'flex-start', marginTop: 5}}>
                    <TopViewAndText
                        category={topDataItem.cagegory}
                        title={topDataItem.title}
                        style={{color: topDataItem.titleColor, fontSize: 15, fontWeight: 'bold'}}
                    />
                </View>
                {/***渲染三张图片*/}
                {this.renderDeliciousImgView(topDataItem.topImgsInfo)}
            </View>
        )
    },
    /**
     * 渲染美味底部View
     * @param data
     */
    renderDeliciousBottomView(data){
        return (
            <View style={{marginLeft: 42, marginTop: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text>{data.fenggeText}</Text>
                    <Text style={{height: 10}}>{data.fenggeCode}</Text>
                </View>

                {/**渲染条目**/}
                {this.renderPreferentailLisView(data.listImtes)}

                <View style={{height: 0.8, backgroundColor: '#dddddd', marginTop: 7}}></View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1, marginTop: 10}}>
                    <TextAndArrowRightView title={data.bottomMore}/>
                </View>
            </View>
        );
    },

    /**
     * 渲染顶部的三线图片信息View
     */
    renderDeliciousImgView(imageInfos){
        //声明存放三张图片信息View的数组
        var imageInfoViews = [];

        for (var i = 0; i < imageInfos.length; i++) {
            imageInfoViews.push(
                <DeliciousImgView key={i}
                                  imgUrl={imageInfos[i].topImgUrl}
                                  floatText={imageInfos[i].floatViewText}
                                  bottomText={imageInfos[i].bottomText}
                                  personCount={imageInfos[i].personCount}
                                  style={{
                                      fontSize: 14,
                                      color: 'black',
                                      fontWeight: 'bold',
                                  }}
                                  tofloatViewBgColor={imageInfos[i].floatViewColor}
                />
            )
        }
        return imageInfoViews;
    },
    /**
     * 渲染顶部三个列表项,每项两条的布局
     * @param itemDatas 每个我要上的数据
     * @returns {XML}
     */
    renderPreferentailLisView(itemDatas){
        //存放每个View的数组
        var itemView = [];
        for (let i = 0; i < itemDatas.length; i++) {
            itemView.push(
                <PreferentailListItem key={i}
                                      itemImgUrl={itemDatas[i].itemImgUrl}
                                      itemName={itemDatas[i].itemName}
                                      itemKm={itemDatas[i].itemKm}
                                      itemAddress={itemDatas[i].itemAddress}
                                      itemZheHouPrice={itemDatas[i].itemZheHouPrice}
                                      itemZheKou={itemDatas[i].itemZheKou}
                                      itemYuanPrice={itemDatas[i].itemYuanPrice}
                                      itemHaoPingPersent={itemDatas[i].itemHaoPingPersent}/>
            )
        }
        return itemView;
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
