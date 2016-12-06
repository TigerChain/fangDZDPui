import React, {PropTypes} from 'react';
import{
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
/**
 * 发现里面带箭头查看更多组件封装
 */
export default class FindArrowView extends React.Component {

  /**
   * 默认的属性值
   * @type {Object}
   */
  static defaultProps = {
    id:0,
    leftTitle:'左边',
    rightTitle:'右边',
    //由于上下边距离会变化，所以动态传递
    paddingBottomAndTop:10,
    //是否点击有按下效果
    isShowClickShadow:false
  };

  //规范组件传过来的类型
  static propTypes = {
      onItemClick: React.PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={this.props.isShowClickShadow?0.5:1}
        onPress={this.onClick.bind(this)}>
      <View style={[styles.rootViewStyle,{paddingBottom:this.props.paddingBottomAndTop,paddingTop:this.props.paddingBottomAndTop}]}>
          <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
          <View style={styles.rightViewStyle}>
              <Text style={styles.rightTitleStyle}>{this.props.rightTitle}</Text>
              <Image source={{uri:'arrow'}} style={{width:15,height:20,marginLeft:8}}/>
          </View>
      </View>
      </TouchableOpacity>
    );
  }

  onClick(){
    if (this.props.onItemClick) { //如果设置了点击事件,则调用
        this.props.onItemClick(this.props.id)
    }
  }
}


const styles = StyleSheet.create({
  //根view的样式
 rootViewStyle:{
   flexDirection:'row',
   backgroundColor:'#fff',
   paddingLeft:10,
   paddingRight:10,
   alignItems:'center',
   justifyContent:'space-between'

 },
 //左边文字的样式
 leftTitleStyle:{
   color:'black',
   fontSize:18
 },
 //右边包括文字和按钮的样式
 rightViewStyle:{
   flexDirection:'row',
   alignItems:'center'
 },
 //右边文字的样式
 rightTitleStyle:{
   color:'#ccc'
 }
}) ;
