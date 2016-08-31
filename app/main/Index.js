/**
 * Created by chenjunjun
 * 主页
 */

import React,{Component} from 'react' ;
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

 import TabNavigator from 'react-native-tab-navigator';

var Home = require('../home/Home');
var Preferentail = require('../preferential/Preferentail');
var Find = require('../find/Find');
var Mine = require('../mine/Mine');

var Index = React.createClass({

    getInitialState(){
        return{
            selectedTab:'home'
        }
    },
    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    title="主页"
                    renderIcon={() => <Image source={{uri:'main_index_home_normal'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'main_index_home_pressed'}}  style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                    selectedTitleStyle={styles.tabTitleStyle}
                >
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="品质优惠"
                    renderIcon={() => <Image source={{uri:'main_index_quality_normal'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'main_index_quality_pressed'}}  style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'pre'}
                    onPress={() => this.setState({ selectedTab: 'pre' })}
                    selectedTitleStyle={styles.tabTitleStyle}
                >
                    <Preferentail/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="发现"
                    renderIcon={() => <Image source={{uri:'main_index_search_normal'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'main_index_search_pressed'}}  style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'find'}
                    onPress={() => this.setState({ selectedTab: 'find' })}
                    selectedTitleStyle={styles.tabTitleStyle}
                >
                    <Find/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    renderIcon={() => <Image source={{uri:'main_index_my_normal'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'main_index_my_pressed'}}  style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => this.setState({ selectedTab: 'mine' })}
                    selectedTitleStyle={styles.tabTitleStyle}
                    badgeText="9"
                >
                    <Mine/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}) ;

const  styles = StyleSheet.create({
    tabbarIconStyle:{
        width:25,
        height:25
    },
    tabTitleStyle:{
        color:'orange'
    }
});
module.exports = Index
