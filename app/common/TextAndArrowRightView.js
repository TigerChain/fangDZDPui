/**
 * Created by chenjunjun
 * 带文和向右按钮的View
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native' ;

export default class TextAndArrowRightView extends React.Component {

    static defaultProps = {
        title: ''
    }

    static propTypes = {
        onArrayClick: React.PropTypes.func
    }

    constructor(props) {
        super(props);

    }

    onclick() {
        if (this.props.onArrayClick) {
            this.props.onArrayClick(this.props.title);
        }
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=> {
                    this.onclick
                }}>
                <View style={styles.textAndArrowViewStyle}>
                    <Text style={{fontSize: 16, color: 'gray'}}>{this.props.title}</Text>
                    <Text style={{color:'black',marginLeft:8}}>►</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    textAndArrowViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
