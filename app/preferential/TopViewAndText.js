/**
 * Created by chenjunjun
 * 品质优惠中的列表前面的FOOD 美味 等View的封装
 */

import React,{Component} from 'react' ;

import {
    StyleSheet,
    Text,
    View
} from 'react-native' ;

export default class TopViewAndText extends React.Component{

    static propTypes = {
        style: Text.propTypes.style
    }

    static defaultProps = {
        category:'',
        title:''
    }

    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>{this.props.category}</Text>
                <Text style={this.props.style}>{this.props.title}</Text>
            </View>
        ) ;
    }
}
