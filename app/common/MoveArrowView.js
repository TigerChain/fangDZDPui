/**
 * Created by chenjunjun
 *
 * 对有箭头的导航View封装
 * 看电影中随处可见
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native' ;

export  default class MoveArrowView extends React.Component {

    //组件默认值,如果没有传,则使用默认值
    static defaultProps  = {
        leftTitle: '',
        rightTitle: '',
        isHideBtoomLine:false,
    };
    //规范组件传过来的类型
    static propTypes = {
        onArrowClick: React.PropTypes.func
    };

    /**
     * 构造方法
     * @param props
     */
    constructor(props){
        super(props);
        //在ES6中一定要绑定一下,才可以使用this回调,否则 会报 错误
        this.onClick = this.onClick.bind(this) ;
    }
    //点击事件
    onClick() {
        if (this.props.onArrowClick) { //如果设置了点击事件,则调用
            this.props.onArrowClick(this.props.leftTitle)
        }
    }

    render() {
        return (
            <View style={styles.moveArrowViewStyle}>
                <View style={styles.hotMovieTopViewStyle}>
                    <Text style={styles.hotViewTopViewText}>{this.props.leftTitle}</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={this.onClick}>
                        {this.renderRightView()}
                    </TouchableOpacity>
                </View>
                {this.isHideOrShowLine()}
            </View>
        );
    }

    /**
     * 渲染右边的View
     * @returns {XML}
     */
    renderRightView(){
        //如果右边有文字则显示,否则只显示 右箭头图片
        if(this.props.rightTitle.length!=0){
            return(
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.hotViewTopViewText}>{this.props.rightTitle}</Text>
                    <Image source={{uri: 'arrow'}} style={{width: 10, height: 15, marginLeft: 4}}></Image>
                </View>
            ) ;
        }else{
            return(
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={{uri: 'arrow'}} style={{width: 10, height: 15, marginLeft: 4}}></Image>
                </View>
            ) ;
        }
    }

    /**
     * 是否显示下划线与否
     * @returns {XML}
     */
    isHideOrShowLine(){
        if(!this.props.isHideBtoomLine){
            return(
                <View style={{height: 0.6, backgroundColor: '#dddddd', marginTop: 7, marginRight: -5}}></View>
            ) ;
        }
    }
}

const styles = StyleSheet.create({
    moveArrowViewStyle: {},
    //热映 电影顶部view样式
    hotMovieTopViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hotViewTopViewText: {
        fontSize: 16,
    },
});