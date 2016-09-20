/**
 * Created by chenjunjun
 * 美食列表item
 */

import React, {Component} from 'react' ;
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native' ;

export  default  class ListItemView extends React.Component {
    //默认的字段属性值
    static defaultProps = {
        itemRenderIcon: 'main_home_navibar_icon_add', //图片
        itemLeftTitle: '聚宾楼烤鸭',//左边的标题
        itemCenterTitle: '126人', //中间的文本
        itemBelowCentenTitle: '唐洋路',//中间底部的文本
        itemAlignRightBelowCenterTitle: '北京菜',//共的种类
        itemRightKm: '1.3km',//公里数
        itemBottomLeftIcon: '',
        itemBottomRightTopIcon: '',
        itemBottomRightTopText: '92代100',
        itemBottomRightBottomIcon: '',
        itemBottomRightBottomText: '268套餐 可供四-五人用餐'
    };
    //对属性的规范
    static propTypes = {
        itemRenderIcon: React.PropTypes.string.isRequired, //图片
        itemLeftTitle: React.PropTypes.string,//左边的标题
        itemCenterTitle: React.PropTypes.string, //中间的文本
        itemBelowCentenTitle: React.PropTypes.string,//中间底部的文本
        itemAlignRightBelowCenterTitle: React.PropTypes.string,//共的种类
        itemRightKm: React.PropTypes.string,//公里数
    };

    constructor(props) {
        super(props);
        this.state = {
            starCount: 5
        };
    }

    render() {
        return (
            <View style={styles.listItemViewStyle}>
                <View style={styles.topViewStyle}>
                    <Image source={{uri: this.props.itemRenderIcon}} style={{width: 60, height: 60}}></Image>
                    <View style={styles.listItemRightViewStyle}>
                        <Text style={styles.listItemRightTopTitleViewStyle}>{this.props.itemLeftTitle}</Text>
                       <Image source={{uri:'star35'}} style={{width:110,height:17}}/>

                        <View style={styles.rightCenBottomViewStyle}>
                            {/**右边的地址和菜品布局**/}
                            <View style={{flexDirection: 'row', marginTop: 4}}>
                                <Text style={{fontSize: 13}}>{this.props.itemBelowCentenTitle}</Text>
                                <Text style={{
                                    marginLeft: 3,
                                    fontSize: 13
                                }}>{this.props.itemAlignRightBelowCenterTitle}</Text>
                            </View>
                            {/**右边的距离布局**/}
                            <Text style={{marginTop: 3, fontSize: 13}}>{this.props.itemRightKm}</Text>

                        </View>
                        {/**横线条*/}
                        <View style={{height: 0.5, backgroundColor: '#dddddd', marginTop: 5}}></View>
                    </View>
                </View>
                {/**横线条下面的布局**/}
                <View style={styles.listItemBottomViewStyle}>
                    <View>
                        {/**右边上面View布局**/}
                        <View style={styles.bottomViewRightViewStyle}>
                            <Image source={{uri:'list_tips_price.9'}} style={{width:60,height:18}}>
                                <Text>你好呀</Text>
                            </Image>
                            <Image source={{uri:'detail_coupon'}} style={styles.bottomIconStyle}></Image>
                            <Text style={styles.bottomTextStyle}>{this.props.itemBottomRightTopText}</Text>
                        </View>
                        {/**右边下面View布局**/}
                        <View style={styles.bottomViewRightViewStyle}>
                            <Image source={{uri:'list_tips_price.9'}} style={{width:60,height:18}}>
                                <Text>你好呀</Text>
                            </Image>
                            <Image source={{uri:'detail_grouponicon'}} style={styles.bottomIconStyle}></Image>
                            <Text style={styles.bottomTextStyle}>{this.props.itemBottomRightBottomText}</Text>
                        </View>
                    </View>
                </View>


            </View>
        );
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
}

const styles = StyleSheet.create({
    listItemViewStyle: {
        backgroundColor: 'white',
        padding: 8
    },
    //条目上半部分view样式
    topViewStyle: {
        flexDirection: 'row',
    },
    //右边View的样式
    listItemRightViewStyle: {
        flex: 1,
        marginLeft: 4
    },
    listItemRightTopTitleViewStyle: {
        fontSize: 16,
        color: 'black'
    },
    //右边包含地址,公里数的view样式
    rightCenBottomViewStyle: {
        flexDirection: 'row',
        marginLeft: 5,
        justifyContent: 'space-between'
    },
    //条目下划线以下的View的样式
    listItemBottomViewStyle: {
        flexDirection: 'row'
    },
    //条目下划线以下的View左边View的样式
    bottomViewRightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:6
    },
    bottomIconStyle:{
        width:16,
        height:16
    },
    bottomTextStyle:{
        marginLeft:6
    },

});

