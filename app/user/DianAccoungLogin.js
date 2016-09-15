/**
 * Created by chenjunjun
 * 点评账号登录界面
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native' ;

export default class DianAccoungLogin extends React.Component {
    render() {
        return (
            <View style={styles.registerViewStyle}>
                {/**渲染标题栏*/}
                {this.renderTitleBar()}
                {this.renderPhoneAndPass()}
                {this.renderLoginView()}
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
                onPress={()=>{
                    this.backOnclick()
                }}>
                <View style={{width: 30}}>
                    <Image source={{uri: 'food_ic_back_u'}} style={{width: 15, height: 15}}/>
                </View>
                    </TouchableOpacity>
                <View style={{alignItems:'center',flex:1,justifyContent:'center'}}>
                <Text style={styles.titleTextStyle}>点评账号登录</Text>
                    </View>
                <View style={{width:30}}></View>
            </View>
        );
    }

    /**
     * 返回事件
     */
    backOnclick(){
        this.props.navigator.pop() ;
    }

    renderPhoneAndPass(){
        return(
            <View style={{backgroundColor:'white',marginTop:20,paddingRight:10,paddingLeft:10}}>
                {/**手机号**/}
                <View style={styles.userNameStyle}>
                    <Text style={styles.accountAndPassText}>账号</Text>
                    <TextInput
                        style={{flex:1}}
                    placeholder={'手机号/邮箱/用户名'}
                    underlineColorAndroid="transparent"></TextInput>
                </View>
                <View style={{backgroundColor:'#dddddd',flex:1,height:0.8}}/>
                {/**密码**/}
                <View style={styles.userNameStyle}>
                    <Text style={styles.accountAndPassText}>密码</Text>
                    <TextInput
                        placeholder={'请填写密码'}
                        style={{flex:1}}
                        underlineColorAndroid="transparent"></TextInput>
                </View>
            </View>
        ) ;
    }

    /**
     * 登录和忘记密码view
     * @returns {XML}
     */
    renderLoginView(){
        return(
            <View style={styles.loginViewStyle}>
                <View style={styles.loginButtonStyle}>
                    <Text style={{color: 'white', fontSize: 18}}>登录</Text>
                </View>
                <Text style={{color:'blue',fontSize:16,marginTop:12}}>忘记密码?</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    registerViewStyle: {
        backgroundColor: '#dddddd',
        flex: 1
    },
    //titleBar样式
    titleBarViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.8,
        height: 47,
        paddingLeft: 3,
        paddingRight: 3,
    },
    titleTextStyle:{
        fontSize:18,
        color:'black',

    },
    //账号和密码框样式
    userNameStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 45
    },
    //账号和密码字体样式
    accountAndPassText:{
        fontSize:16,
        color:'black',
        width:50
    },
    loginViewStyle:{
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15
    },
    //登录按钮样式
    loginButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 4,
        height: 40,

    },
});


