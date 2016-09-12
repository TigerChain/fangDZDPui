/**
 * Created by chenjunjun
 * 推荐影院 list 列表封装
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native' ;

export  default class RecommendMvListItem extends React.Component {
    //默认属性
    static defaultProps = {
        topTitle: '', //顶部标题
        topLeftIcon: '',//挨着标题的图片
        topRightIcon: '',//抬头标题图片的图片
        centerText: '', //中间钱数
        centerRightText: '',//中间右边的地址文本
        marks: [],
    };

    render() {
        return (
            <View style={styles.recommendViewStyle}>
                {/**条目顶部数据**/}
                <View style={styles.itemTopViewStyle}>
                    <Text style={styles.itemTopTextStyle}>{this.props.topTitle}</Text>
                    {this.renderIcon(this.props.topLeftIcon)}
                    {this.renderIcon(this.props.topRightIcon)}

                </View>
                {/**条目中间数据**/}
                <View style={styles.itemCenterViewStyle}>
                    <View style={styles.itemCenterLeftViewStyle}>
                        <Text style={styles.itemCenterLeftTextStyle}>{this.props.centerText}</Text>
                        <Text style={{alignSelf: 'flex-end'}}>起</Text>
                    </View>
                    <Text>{this.props.centerRightText}</Text>
                </View>
                {/**条目底部数据**/}
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    {this.renderMarksView(this.props.marks)}
                </View>

                <View style={{height: 0.6, backgroundColor: '#dddddd', marginTop: 7, marginRight: -5}}></View>
            </View>
        );
    }

    /**
     * 取得标说明的View
     * @param marks
     * @returns {Array}
     */
    renderMarksView(marks) {
        if(marks.length>0){
            //存放标志说明的View
            var markViews = [];
            for (var i = 0; i < marks.length; i++) {
                var color = marks[i].styleColor;
                markViews.push(
                    <View key={i} style={[styles.flowViewStyle, {borderColor: color}]}>
                        <Text style={[styles.flowTextStyle, {color: color}]}>{marks[i].flag}</Text>
                    </View>
                );
            }
            return markViews;
        }
    }

    /**
     * 渲染图片
     * @param propsIcon
     * @returns {XML}
     */
    renderIcon(propsIcon){
        if(propsIcon.length>0){
            return <Image source={{uri: propsIcon}} style={styles.imgViewStyle}/>
        }

    }
}

const styles = StyleSheet.create({
    //推荐影院 列表item根布局
    recommendViewStyle: {
        backgroundColor: 'white',
        padding: 5,
    },
    //条目顶部 布局
    itemTopViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgViewStyle: {
        width: 20,
        height: 20,
        marginLeft: 5
    },
    //条目中间的布局
    itemCenterViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    //条目中间布局左边的布局
    itemCenterLeftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    //条目中间布局左边的布局中的钱样式
    itemCenterLeftTextStyle: {
        fontSize: 18,
        color: 'orange'
    },
    itemTopTextStyle: {
        fontSize: 18,
        color: 'black'
    },
    flowViewStyle: {

        borderWidth: 0.8,
        borderRadius: 2.5,
        paddingLeft: 1.5,
        paddingRight: 1.5,
        marginRight: 4
    },
    flowTextStyle: {
        fontSize: 10
    }
});