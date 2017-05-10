'use strict';
import React, { Component } from 'react';
import  {
    View,
    WebView,
    Platform
} from 'react-native';

export default class BTWebView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1,paddingTop:Platform.os==='ios'?20:0}}>
                <WebView startInLoadingState={true}
                         javaScriptEnabled={true}
                         url={this.props.url}
                         source={{uri:this.props.url,method:'GET'}}/>
            </View>
        )
    }
}
