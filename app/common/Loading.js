/**
 * Created by chenjunjun
 * 加载框  转呀转 转呀转
 */

import React, {Component} from 'react';
import{
    ActivityIndicator,
    StyleSheet,
    View,
    Text
} from 'react-native';


class Loading extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            //默认加载
            loading: true
        };
    }

    // /**
    //  * 开启一个定时器
    //  */
    // componentDidMount() {
    //     //setState()方法重新刷新界面改变loading值
    //     this.timer = setTimeout(() => {
    //             this.setState({loading: false})
    //         },
    //         8000)
    // }

    // /**
    //  * 清除定时器 一定要清除
    //  */
    // componentWillUnMount() {
    //     this.timer && clearTimeout(this.timer)
    // }


    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <View style={styles.loadViewStyle}>
            <ActivityIndicator
                //加载状态大小 samll / large
                size='large'
                //加载状态的颜色
                color='red'
                //是否显示
                animating={true}
            />
                <Text>加载中...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loadViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
});

export default Loading
