'use restict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from '../Home/TabMenu';
import styles from '../StylesSheet';
import Bar from '../More/Bar';
import Event from '../Event/BTEvent';
var ImageData = require('../ImageData.json');
var TimerMixin = require('react-timer-mixin');//import timer

var {width}=Dimensions.get('window').width;

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state={
        currentPage:0,
        isOpen:false,
        selectedItem:'About'
      }
    }
    toggle(){
        this.setState({
            isOpen:!this.state.isOpen,
        });
    }
    onMenuItemSelected = (item) =>{
        this.setState({
            isOpen: false ,
            selectedItem:item ,
         });
    }
    updateMenuState(isOpen){
        this.setState({
            isOpen:isOpen,
        })
    }
  render() {
    const menu =<Menu onItemSelected={this.onMenuItemSelected}/>;
    return (
      <SideMenu
               menu={menu}
               isOpen ={this.state.isOpen}
               //openMenuOffset={Dimensions.get('window').width}
               onChange={(isOpen)=>this.updateMenuState(isOpen)}>
      <View style={styles.container}>
      <View style={styles.SearchBarContainer}>
      <Image source={require('../images/BTLogo.png')} style={styles.sideMenu}/>
      <View style={styles.searchBox}>

          <Image source={require('../images/icon_shop_search.png')}
                style={styles.searchIcon}/>
          <TextInput
              style={styles.searchInputText}
              keyboardType='web-search'
              placeholder='Search Events'
              underlineColorAndroid={'transparent'}
          />
    </View>
      <Button onPress={()=>this.toggle()}>
          <Image source={require('../images/menu.png')} style={styles.button}/>
      </Button>

        </View>

        <ScrollView>
        <ScrollView
        horizontal={true}   // horizontal allignment
        showsHorizontalScrollIndicator={false}  // Hide horizontal indicator
        showsVerticalScrollIndicator={false}    // Hide Vertical indicator
        pagingEnabled={true}
        onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
        >
          {/* {this.renderItem() } */}
          <Image key={1} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b52eade4fcb5991e72c16e/1488268974401/TASSEL1200.JPG'}} style={styles.itemStyle}/>
          <Image key={2} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b49d1d17bffc07f1c3cf0e/1488231710603/1200x560+Shoot+the+freak+3.jpg'}}style={styles.itemStyle}/>
          <Image key={3} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b49976e3df283cef4fd3ec/1488230779982/Castles+Basement+1200x560.png'}}style={styles.itemStyle}/>
          <Image key={4} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b4afc9e6f2e15812074d78/1488236490221/Performance+Salon+Week+2_1200.jpg'}}style={styles.itemStyle} />
          <Image key={5}source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b497e4a5790a11a8d14526/1488230372981/1200-560+size+new.jpg'}}style={styles.itemStyle}/>
       </ScrollView>
       <View style={styles.indicatorStyle}>
          {this.renderPageCircle()}
       </View>

      <View style={styles.TitleStyle}>
          <Text style={styles.TitleText}>WHAT‘S ON</Text>
          <View style={styles.ImageBox}>
              <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b49d6a17bffc07f1c3d46d/1488243609528/Pedal+Basement+400x400.png'}}style={styles.TitleitemStyle}/>
              <Text style={styles.DetailText}>PEDAL</Text>
              <View style={styles.Divider}></View>
              <Text style={styles.TimeText}>4 MAR, 5:00 PM</Text>
              <View style={styles.Divider}></View>
              <View style={styles.InfoBTStyle}>
              <TouchableOpacity onPress={() => { alert('More Info') }}>
                  {/*Info button*/}
                  <View style={styles.InfoViewStyle}>
                      <Text style={styles.MoreInfoText}>More Info</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { alert('Book Now') }}>
                  {/*Info button*/}
                  <View style={styles.BookNowViewStyle}>
                      <Text style={styles.BookNowText}>Book Now</Text>
                  </View>
              </TouchableOpacity>
              </View>
          </View>
          <View style={styles.ImageBox}>
              <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b49c6c5016e1b99ef70151/1488243646158/400x400+shoot+the+freak.jpg'}}style={styles.TitleitemStyle}/>
              <Text style={styles.DetailText}>SHOOT THE FREAK</Text>
              <View style={styles.Divider}></View>
              <Text style={styles.TimeText}>4 - 11 MAR 2017, VARIOUS TIMES</Text>
              <View style={styles.Divider}></View>
              <View style={styles.InfoBTStyle}>
              <TouchableOpacity onPress={() => { alert('More Info') }}>
                  {/*Info button*/}
                  <View style={styles.InfoViewStyle}>
                      <Text style={styles.MoreInfoText}>More Info</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { alert('Book Now') }}>
                  {/*Info button*/}
                  <View style={styles.BookNowViewStyle}>
                      <Text style={styles.BookNowText}>Book Now</Text>
                  </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ImageBox}>
              <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b498a49de4bb3b2b0d2109/1488241362367/Castles+Basement+400x400.png'}}style={styles.TitleitemStyle}/>
              <Text style={styles.DetailText}>CASTLES</Text>
              <View style={styles.Divider}></View>
              <Text style={styles.TimeText}>28 FEB - 4 MAR 2017, VARIOUS TIMES</Text>
              <View style={styles.Divider}></View>
              <View style={styles.InfoBTStyle}>
              <TouchableOpacity onPress={() => { alert('More Info') }}>
                  {/*Info button*/}
                  <View style={styles.InfoViewStyle}>
                      <Text style={styles.MoreInfoText}>More Info</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { alert('Book Now') }}>
                  {/*Info button*/}
                  <View style={styles.BookNowViewStyle}>
                      <Text style={styles.BookNowText}>Book Now</Text>
                  </View>
              </TouchableOpacity>
            </View>
          </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:23,color:'white',margin:10}}>Coming Soon</Text>
           <TouchableOpacity onPress={() => {this.pushToEvent()}}>
              {/*More button*/}
              <View style={styles.BookNowViewStyle}>
                  <Text style={styles.BookNowText}>More Events</Text>
              </View>
          </TouchableOpacity>
        </View>
     </View>
     </ScrollView>
      </View>

      </SideMenu>
    );
  }
 renderItem(){
    var itemAry = [];
    // Get Js Data
    var imgAry = ImageData.data;
    for (var i = 0; i<imgAry.length; i++) {
        // Get individual File
        var item = imgAry[i];
        // push it to array
        itemAry.push(
            <Image key={i} style={styles.itemStyle} source={{uri:item.images}} />
        )
    }
    // Return array
    return itemAry;
  }
  renderPageCircle(){
      var indicatorArr=[];
      var style;
        for(var i = 0; i<5;i++){
        style = (i==this.state.currentPage)?{color:'orange'} : {color:'#ffffff'};
          indicatorArr.push(
            <Text key={i} style={[{fontSize:35},style]}>&bull;</Text>
        );
      }
      return indicatorArr;
    }
    onAnimationEnd(e){
      var offsetX= e.nativeEvent.contentOffset.x+30;
      var currentPage = Math.floor(offsetX / Dimensions.get('window').width);
      console.log(currentPage);
      this.setState({currentPage:currentPage});
    }
    pushToEvent() {
      this.props.navigator.push(
           {
               component: Event,//Navigate page
               title: 'Event'
           }
      );
   }
};
class Button extends Component{
    _handlePress(e){
        if(this.props.onPress){
            this.props.onPress(e);
        }
    }
render(){
        return (
            <TouchableOpacity onPress={this._handlePress.bind(this)}
                              style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}
