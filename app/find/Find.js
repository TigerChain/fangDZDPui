/**
 * Created by chenjunjun
 * 发现
 */

import React,{Component} from 'react' ;
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView

} from 'react-native' ;

var Dimensions = require('Dimensions');
//取得屏幕宽度
var screenWidth = Dimensions.get('window').width;

import FindArrowView from '../common/FindArrowView' ;

import FindImageAndText from '../common/FindImageAndText';

class Find extends React.Component{
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
            {this._renderTitleBar()}
              <FindArrowView
                leftTitle={'好友去哪'}
                rightTitle={'去绑定送红包'}
                isShowClickShadow={true}
                paddingBottomAndTop={20}
                onItemClick={this.onItemClick}
                id={1}
                />
            {/* 探好店的布局 */}
            {this._renderSearchGoodDian()}
            {/* 推荐菜的布局 */}
            {this._renderRecommendFoodView() }
            {/* 榜单布局 */}
            {this._renderBangDanView()}
        </View>
      </ScrollView>
    ) ;
  }
  /**
   * 渲染头部组件
   */
  _renderTitleBar(){
      return (
          <View style={styles.titleBarViewStyle}>
              <Text style={styles.titleLeftTitleStyle}>西安</Text>
              <Image source={{uri: 'navibar_icon_arrow_down_ed'}} style={{width: 13, height: 8}}/>
                <View style={styles.titleCenterViewStyle}>
                    <TextInput
                        style={styles.titleCenterTextInputStyle}
                        inlineImageLeft="main_ic_home_search"
                        inlineImagePadding={5}
                        placeholder={'输入商城名、地点'}
                    />
                </View>
          </View>
      );
  }

  _renderSearchGoodDian(){
    return(
      <View style={styles.searchGoodViewStyle}>
        <FindArrowView
          leftTitle={'探好店'}
          rightTitle={'全部17个精选主题'}
          isShowClickShadow={false}
          onItemClick={this.onItemClick}
          id={2}
          />
        <View style={{flexDirection:'row',margin:-4}}>
            {this._renderSerchGoodDianImg()}
        </View>
      </View>
    ) ;
  }

_renderSerchGoodDianImg(){
  let views = [] ;
  for(let i=0 ;i <2 ;i++){
    views.push(
      <FindImageAndText
        key={i}
        mainText={'测试1'}
        subText={'测试2'}
        />
    )
  }
  return views ;
}

/**
 * 推荐菜布局
 */
_renderRecommendFoodView(){
  return(
    <View style={styles.searchGoodViewStyle}>
      <FindArrowView
        leftTitle={'推荐菜'}
        rightTitle={'全部8道推荐菜'}
        isShowClickShadow={false}
        onItemClick={this.onItemClick}
        id={3}
        />
      <View style={{flexDirection:'row',margin:-4}}>
          {this._renderRecommendFoodImg()}
      </View>
    </View>
  ) ;
}

_renderRecommendFoodImg(){
  let views = [] ;
  for(let i=0 ;i <3 ;i++){
    views.push(
      <FindImageAndText
        key={i}
        mainText={'测试1'}
        />
    )
  }
  return views ;
}
/**
 * 渲染榜单布局
 */
_renderBangDanView(){
  return(
    <View style={styles.searchGoodViewStyle}>
      <FindArrowView
        leftTitle={'榜单'}
        rightTitle={'全部529个榜单'}
        isShowClickShadow={false}
        onItemClick={this.onItemClick}
        id={4}
        />
    </View>
  )
}
  onItemClick(id){
    alert(id);
    switch (id) {
      case 1:

      break;

      case 2:

      break ;

    }
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#dddddd'
    },
    titleBarViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.8,
        height: 47,
        paddingLeft: 10,
        paddingRight: 10,
    },
    //左边文字的样式
    titleLeftTitleStyle: {
        color: 'orange',
        fontSize: 16,
        marginRight: 5
    },
    //为了实现圆角输入框,加了一个圆角view
    titleCenterViewStyle: {
        backgroundColor: '#dddddd',
        height: 32,
        borderRadius: 15,
        justifyContent: 'center',
        marginLeft:10,
        flex:1
    },
    //目前没有发现TextInput可以设置背景图片,TextInput设置圆角不起作用,所以放在圆角view中并且其背景是透明的完美解决圆角TextInput
    titleCenterTextInputStyle: {
        flex: 1,
        backgroundColor: "#00000000",
        height: 40
    },
    //探好店的根view布局
    searchGoodViewStyle:{
      backgroundColor:'#fff',
      marginTop:10,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10
    }
});

export default Find
