import React, {PropTypes} from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native' ;

/**
 * 发现中的图文组件
 */
export default class FindImageAndText extends React.Component {

  static defaultProps = {
    imgUrl:'http://qcloud.dpfile.com/pc/9o7qYwiVwYk9ZwBJ06QDSOXTRORn-7804_QomUtDrN9zPA0vGs8aJLVNzap7d9f2CjM_FsO3sW809PHY7spB8g.jpg',
    mainText:'',
    subText:''
  };


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderImgAndTextView()}
      </View>
    );
  }
  /**
   * 渲染图文View
   */
  _renderImgAndTextView(){
    return(
      <View style={styles.imgViewStyle}>
        <Image source={{uri:this.props.imgUrl}} style={styles.imgStyle}/>
        {this._renderText()}
      </View>
    )
  }
  /**
   * 渲染文本内容，一个文本还是两个文本
   */
  _renderText(){
    if(this.props.subText.length!=0){
      return (<View style={{marginTop:5}}>
                <Text style={styles.mainTextViewStyle}>{this.props.mainText}</Text>
                <Text style={styles.subTextViewStyle}>{this.props.subText}</Text>
              </View>)
    }else{

      return(<View style={styles.singleMainViewStyle}><Text style={styles.mainTextViewStyle}>{this.props.mainText}</Text></View>)
    }
  }

}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  //图片view样式
  imgViewStyle:{
    flex:1,
    borderWidth:1,
    borderColor:'#eee',
    paddingBottom:10,
    margin:4
  },
  //图片的样式
  imgStyle:{
    height:80,
    resizeMode:'cover'
  },
  //主文本的样式
  mainTextViewStyle:{
    color:'#000000',
    fontSize:16,
  },
  //副文本的样式
  subTextViewStyle:{
    color:'#ccc'
  },
  //单独一个主标题的样式
  singleMainViewStyle:{
    marginTop:5,
    alignItems:'center'
  }
}) ;
