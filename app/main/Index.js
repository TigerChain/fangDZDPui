/**
 * Created by chenjunjun
 * 主页
 */

import React,{Component} from 'react' ;
import {
    StyleSheet,
    View,
    Text,
    Image,
    Navigator
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator';

var Home = require('../home/Home');
var Preferentail = require('../preferential/Preferentail');
import Find from '../find/Find';
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
                    {/*<Navigator*/}
                        {/*initialRoute={{name:'home',component:Home}}*/}
                        {/*configureScene={()=>{*/}
                            {/*return Navigator.SceneConfigs.PushFromRight;*/}
                        {/*}}*/}

                        {/*renderScene={(route,navigator)=>{*/}
                            {/*let Component = route.component;*/}
                            {/*return <Component {...route.passProps} navigator={navigator} />;*/}
                        {/*}}*/}
                    {/*/>*/}
                    <Home navigator={this.props.navigator}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="品质优惠"
                    renderIcon={() => <Image source={{uri:'main_index_quality_normal'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'main_index_quality_pressed'}}  style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'pre'}
                    onPress={() => this.setState({ selectedTab: 'pre' })}
                    selectedTitleStyle={styles.tabTitleStyle}
                >
                    {/*<Navigator*/}
                        {/*initialRoute={{name:'pre',component:Preferentail}}*/}
                        {/*configureScene={()=>{*/}
                            {/*return Navigator.SceneConfigs.PushFromRight;*/}
                        {/*}}*/}

                        {/*renderScene={(route,navigator)=>{*/}
                            {/*let Component = route.component;*/}
                            {/*return <Component {...route.passProps} navigator={navigator} />*/}
                        {/*}}*/}
                    {/*/>*/}
                    <Preferentail navigator={this.props.navigator}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="发现"
                    renderIcon={() => <Image source={{uri:'main_index_search_normal'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'main_index_search_pressed'}}  style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'find'}
                    onPress={() => this.setState({ selectedTab: 'find' })}
                    selectedTitleStyle={styles.tabTitleStyle}
                >
                    <Navigator
                        initialRoute={{name:'find',component:Find}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}

                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />
                        }}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    renderIcon={() => <Image source={{uri:'main_index_my_normal'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'main_index_my_pressed'}}  style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => this.setState({ selectedTab: 'mine' })}
                    selectedTitleStyle={styles.tabTitleStyle}
                    renderBadge={()=>this.renderBadge()}
                >
                    <Navigator
                        initialRoute={{name:'mine',component:Mine}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}

                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />
                        }}
                    />
                </TabNavigator.Item>
            </TabNavigator>
        );
    },
    renderBadge(){
        return(
            <View style={styles.badgeView}>
                <Text style={styles.badgeText}>9</Text>
            </View>
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
    },
    badgeView:{
        width:24,
        height:18 ,
        backgroundColor:'red',
        borderWidth:1.5,
        marginLeft:11,
        marginTop:3,
        borderColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    badgeText:{
        color:'#fff',
        fontSize:8,
    }
});
module.exports = Index
