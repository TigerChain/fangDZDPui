/**
 * Created by chenjunjun
 * 无密码快捷登录
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native' ;

var Dimensions = require('Dimensions');
//取得屏幕宽度
var screenWidth = Dimensions.get('window').width;

var HomeTopItemView = require('../home/HomeTopItemView');

import dismissKeyboard from 'dismissKeyboard';

var ToastAndroid = require('ToastAndroid');

import DianAccoungLogin from './DianAccoungLogin' ;

//在点击更多事件中取不到self所以这里 声明一个成员变量 来指向this
var self;

export default class QuickLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '', //手机号
            userSmsCode: '',//验证码
            moreLogin: false//是否点击更多登录按钮
        }
        self = this;
    }

    render() {
        return (
            <View style={styles.quickLoginViewStyle}>
                {/**渲染标题栏**/}
                {this.renderTitleBar()}
                {/**渲染手机和密码登录框**/}
                {this.renderPhoneAndPassView()}
                {/**渲染中间的View**/}
                {this.renderCenterView()}
                {/**渲染第三方登录*/}
                {this.renderThirdLoginView()}
            </View>
        );
    }

    /**
     * 渲染titlebar
     */
    renderTitleBar() {
        return (
            <View style={styles.titleBarViewStyle}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> {
                        this.onBackClick()
                    }}>
                    <View style={{width: 30}}>
                        <Image source={{uri: 'food_ic_back_u'}} style={{width: 15, height: 15}}></Image>
                    </View>
                </TouchableOpacity>
                <Text style={styles.titleTextStyle}>无密码快捷登录</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> {
                        this.registger()
                    }}>
                    <View style={{width: 50}}>
                        <Text style={styles.titleRightTextStyle}>注册</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    onBackClick() {
        this.props.navigator.pop();
    }

    //注册方法
    registger() {
        ToastAndroid.show('注册', ToastAndroid.SHORT);
    }

    /**
     * 渲染 手机和密码登录框
     */
    renderPhoneAndPassView() {
        return (
            <View style={styles.phoneAndPassViewStyle}>
                {/**手机号的View**/}
                <View style={styles.topViewStyle}>
                    <View style={styles.phoneZoneViewStyle}>
                        <Text style={styles.rightTextViewStyle}>+86</Text>
                        <Image source={{uri: 'title_home_arrow_down_normal'}} style={{width: 13, height: 8}}/>
                        <View style={{backgroundColor: '#dddddd', height: 30, width: 0.8}}></View>
                    </View>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.phoneInputStyle}
                        placeholder={'手机号'}
                        onChangeText={(text)=> {
                            this.state.userName = text;
                        }}/>
                    <View style={styles.getSmsCodeViewStyle}>
                        <Text style={{fontSize: 13}}>获取验证码</Text>
                    </View>

                </View>
                <View style={{backgroundColor: '#dddddd', height: 0.8}}></View>
                {/**验证码的View**/}
                <View style={styles.topViewStyle}>
                    <View style={styles.phoneZoneViewStyle}>
                        <Text style={styles.rightTextViewStyle}>验证码</Text>

                    </View>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.phoneInputStyle}
                        placeholder={'请输入手机难码'}
                        onChangeText={(text)=> {
                            this.state.userSmsCode = text;
                        }}/>
                </View>
            </View>
        );
    }

    /**
     * 渲染中间的View
     */
    renderCenterView() {
        return (
            <View style={styles.centerViewStyle}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> {
                        this.getUserInfo()
                    }}>

                    <View style={styles.loginViewStyle}>
                        <Text style={{color: 'white', fontSize: 18}}>登录</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> {
                        this.dianAccountLogin()
                    }}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 13}}>
                        <Text style={{color: 'blue'}}>点评账号和密码登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 渲染第三方登录
     */
    renderThirdLoginView() {
        return (
            <View style={{marginTop: 35}}>
                <View style={styles.thirdLoginTopViewStyle}>
                    <View style={{backgroundColor: 'gray', height: 0.5, flex: 1, marginLeft: 15}}></View>
                    <Text style={{margin: 3, fontSize: 17}}>第三方登录</Text>
                    <View style={{backgroundColor: 'gray', height: 0.5, flex: 1, marginRight: 15}}></View>
                </View>

                {this.renderThirdLoginButton()}
            </View>
        )
    }

    onclick(text, position) {

        switch (position) {
            case 0:

                break;
            case 1:

                break;
            case 2:
                //修改状态,重新渲染
                self.setState({
                    moreLogin: true
                });

                break;
        }
        ToastAndroid.show(text, ToastAndroid.SHORT);
    }


    renderThirdLoginButton() {
        if (this.state.moreLogin) {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
                    <HomeTopItemView
                        style={{flex: 1}}
                        renderIcon={{uri: 'main_weixin_btn'}}
                        text="微信"
                        position={0}
                        onclick={this.onclick}
                    />
                    <HomeTopItemView
                        style={{flex: 1}}
                        renderIcon={{uri: 'main_qq_btn'}}
                        text="QQ"
                        position={1}
                        onclick={this.onclick}
                    />

                    <HomeTopItemView
                        style={{flex: 1}}
                        renderIcon={{uri: 'main_weibo_btn'}}
                        text="微博"
                        position={3}
                        onclick={this.onclick}
                    />
                    <HomeTopItemView
                        style={{flex: 1}}
                        renderIcon={{uri: 'main_zhifubao_btn'}}
                        text="支付宝"
                        position={4}
                        onclick={this.onclick}
                    />

                </View>
            )

        } else {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
                    <HomeTopItemView
                        style={{flex: 1}}
                        renderIcon={{uri: 'main_weixin_btn'}}
                        text="微信"
                        position={0}
                        onclick={this.onclick}
                    />
                    <HomeTopItemView
                        style={{flex: 1}}
                        renderIcon={{uri: 'main_qq_btn'}}
                        text="QQ"
                        position={1}
                        onclick={this.onclick}
                    />

                    <HomeTopItemView
                        style={{flex: 1}}
                        renderIcon={{uri: 'main_more_thirdlogin'}}
                        text="更多"
                        position={2}
                        onclick={this.onclick}
                    />

                </View>
            )


        }
    }

    getUserInfo() {
        if (this.state.userName.length === 0 || this.state.userSmsCode.length === 0) {
            ToastAndroid.show('手机号或验证码不能为空', ToastAndroid.SHORT);
            return;
        }
        ToastAndroid.show('用户名' + this.state.userName + "::" + this.state.userSmsCode, ToastAndroid.SHORT);
        //隐藏软件键盘
        dismissKeyboard();
    }

    dianAccountLogin() {
        this.props.navigator.push({
                component: DianAccoungLogin
            }
        )
    }
}

const styles = StyleSheet.create({
    quickLoginViewStyle: {
        backgroundColor: '#dddddd',
        flex: 1
    },
    //标题栏样式
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
    //titleBar文本样式
    titleTextStyle: {
        fontSize: 18,
        color: 'black'
    },
    //注册文本样式
    titleRightTextStyle: {
        color: 'orange',
        fontSize: 16
    },
    //用户名和密码view样式
    phoneAndPassViewStyle: {
        backgroundColor: 'white',
        marginTop: 15,
        borderBottomWidth: 0.8,
        borderBottomColor: '#dddddd',
        paddingLeft: 8,
        paddingRight: 8
    },
    //手机号样式
    topViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45
    },
    phoneInputStyle: {
        width: screenWidth * 0.6,

    },
    phoneZoneViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    getSmsCodeViewStyle: {
        borderColor: 'gray',
        borderWidth: 0.5,
        padding: 4
    },
    rightTextViewStyle: {
        fontSize: 18,
        color: 'black'
    },
    //中间View的样式
    centerViewStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15
    },
    //登录按钮样式
    loginViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 4,
        height: 40
    },
    //三方登录顶部样式
    thirdLoginTopViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});