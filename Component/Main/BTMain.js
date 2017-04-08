import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,   // define platform
    Navigator
} from 'react-native';


/**-----import component------**/
import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/BTHome');
var Shop = require('../Event/BTEvent');
var Mine = require('../Mine/BTMine');
var More = require('../More/BTMore');


var Main = React.createClass({

    // initialize home page state
    getInitialState(){
       return{
           selectedTab:'home' // default as Home Page
       }
    },
    render() {
        return (
            <TabNavigator>
                {/*--Main--*/}
                <TabNavigator.Item
                  title="Main"
                  renderIcon={() => <Image style={styles.iconStyle} source={require('../images/icon_tabbar_homepage.png')} />}
                  renderSelectedIcon={() => <Image style={styles.iconStyle} source={require('../images/icon_tabbar_homepage_selected.png')} />}
                  onPress={()=>{this.setState({selectedTab:'home'})}}
                  selected={this.state.selectedTab === 'home'}
                >
                    <Navigator
                        initialRoute={{name:'Main',component:Home}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--Event--*/}
                <TabNavigator.Item
                    title="Event"
                    renderIcon={() => <Image source={require('../images/icon_tabbar_merchant_normal.png')} style={styles.iconStyle}/>} // icon
                    renderSelectedIcon={() =><Image source={require('../images/icon_tabbar_merchant_selected.png')} style={styles.iconStyle}/>}   // when icon selected
                    onPress={()=>{this.setState({selectedTab:'Event'})}}
                    selected={this.state.selectedTab === 'Event'}
                >
                    <Navigator
                        initialRoute={{name:'Event',component:Shop}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--Mine--*/}
                <TabNavigator.Item
                    title="Mine"
                    renderIcon={() => <Image source={require('../images/icon_tabbar_mine.png')}style={styles.iconStyle}/>} // icon
                    renderSelectedIcon={() =><Image source={require('../images/icon_tabbar_mine_selected.png')} style={styles.iconStyle}/>}   // selected icon
                    onPress={()=>{this.setState({selectedTab:'mine'})}}
                    selected={this.state.selectedTab === 'mine'}
                >
                    <Navigator
                        initialRoute={{name:'Mine',component:Mine}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--MoreInfo--*/}
                <TabNavigator.Item
                    title="More"
                    renderIcon={() => <Image source={require('../images/icon_tabbar_misc.png')} style={styles.iconStyle}/>} // icon
                    renderSelectedIcon={() =><Image source={require('../images/icon_tabbar_misc_selected.png')} style={styles.iconStyle}/>}   // when icon selected
                    onPress={()=>{this.setState({selectedTab:'more'})}}
                    selected={this.state.selectedTab === 'more'}
                >
                    <Navigator
                        initialRoute={{name:'More',component:More}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
});

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    }
});

// 输出组件类
module.exports = Main;
