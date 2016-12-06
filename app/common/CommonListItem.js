/**
 * Created by chenjunjun
 * 封装listItem组件 如我的界面
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

var CommonListItem = React.createClass({
    
    getDefaultProps(){
        return{
            //左边按钮
            itemLeftIcon:'',
            //左边按钮样式
            itemLeftIconStyle:'',
            //左边标题
            itemLeftTitle:'',
            //右边标题
            itemRightTitle:'',
            //View的高度,有可能是变化的,所以外面去传递默认值
            itemLeftViewHeight:''
        }
    },

    render:function(){
        return(
            <View ref='rooView' style={{
                flexDirection:'row',
                justifyContent:'space-between',
                backgroundColor:'white',
                height:this.props.itemLeftViewHeight.length===0?40:parseInt(this.props.itemLeftViewHeight),
                borderBottomColor:'#eeeeee',
                borderBottomWidth:0.7
            }}>
                {/**左边的view**/}

                {this.renderLeftView()}

                {/**右边的view**/}
                {this.renderRightView()}
            </View>
        );
    },
    /**
     * 渲染左边的View
     * @returns {XML}
     */
    renderLeftView:function () {
        return(
            <View style={styles.itemLeftViewStyle}>
                {this.renderLeftIconSise()}
                <Text style={{marginLeft:5,color:'black',fontSize:16}}>{this.props.itemLeftTitle}</Text>
            </View>
        );
    },
    /**
     * 渲染左边图片的方法
     * @returns {XML}
     */
    renderLeftIconSise:function () {
        //如果设置了图片的大小 就按设置的走,否则就是默认的大小
        if(this.props.itemLeftIconStyle.length!=0){
            return(<Image source={{uri:this.props.itemLeftIcon}} style={{width:parseInt(this.props.itemLeftIconStyle),height:parseInt(this.props.itemLeftIconStyle)}}/>);
        }else{
           return(<Image source={{uri:this.props.itemLeftIcon}} style={{width:20,height:20}}/>);
        }
    } ,
    /**
     * 渲染右边的View
     * @returns {XML}
     */
    renderRightView:function () {
        return(
            <View style={styles.itemRightViewStyle}>
                {this.isRenderRightTitle()}
                <Image source={{uri:'lstitem_rightarrow'}} style={{width:9,height:14,marginLeft:5}}/>
            </View>
        );
    },
    /**
     * 渲染右边标题View
     * @returns {XML}
     */
    isRenderRightTitle:function () {
        //如果右边有文字则 渲染
        if(this.props.itemRightTitle.length!=0){
            return(<Text style={{color:'gray'}}>{this.props.itemRightTitle}</Text>);
        }
    }
});

const  styles = StyleSheet.create({

    //条目右边的View样式
    itemRightViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:8
    },
    //条目有左边的View样式
    itemLeftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8
    }
});

module.exports = CommonListItem
