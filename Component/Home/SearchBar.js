import React, {Component} from 'react';
import {
    Image,
    TextInput,
    View,
    Platform,
    StyleSheet
} from 'react-native';

var SearchBar = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/qbfl.png')} style={styles.logo}/>
                <View style={styles.searchBox}>
                    <Image source={require('../images/icon_shop_search.png')} style={styles.searchIcon}/>
                    <TextInput
                        style={styles.inputText}
                        keyboardType='web-search'
                        placeholder='Search Events'
                        underlineColorAndroid={'transparent'}
                        />
                </View>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        backgroundColor: '#d74047',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo: {
        height: 30,
        width: 30,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    searchBox: {
        height: 30,
        flexDirection: 'row',
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
        borderRadius: 5,  // 设置圆角边
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch'
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14,
        marginTop: -6.65,
        marginBottom: -6.65,

    }
});
module.exports = SearchBar;
