import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Navigator,
} from 'react-native';

import News from '../More/News';
import Bar from '../More/Bar';
import Support from '../More/Support';

export default class defaultMore extends Component{
  clickJumpToNews(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "News",
        component: News
        });
      }
  }
  clickJumpToBar(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "Bar",
        component: Bar
        });
      }
  }
  clickJumpToSupport(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "Support",
        component: Support
        });
      }
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
      <View style={styles.space}>
      </View>
      <TouchableOpacity onPress = {this.clickJumpToNews.bind(this)}>
          <Image source={require('../images/News_Head_Image.png')}
                style={styles.headImage}
          />
      </TouchableOpacity>
      <View style={styles.space}>
      </View>
      <TouchableOpacity onPress = {this.clickJumpToBar.bind(this)}>
      <Image source={require('../images/Bar_Head_Image.png')}
            style={styles.headImage}
      />
      </TouchableOpacity>
      <View style={styles.space}>
      </View>
      <TouchableOpacity onPress = {this.clickJumpToSupport.bind(this)}>
      <Image source={require('../images/Support_Head_Image.png')}
            style={styles.headImage}
      />
      </TouchableOpacity>
      <View style={styles.space}>
      </View>
      <Image source={require('../images/OurStory_Head_Image.png')}
            style={styles.headImage}
      />
      <View style={styles.space}>
      </View>
      <Image source={require('../images/ForArtist_Head_Image.png')}
            style={styles.headImage}
      />
      <View style={styles.space}>
      </View>
      <Image source={require('../images/Visit_Head_Image.png')}
            style={styles.headImage}
      />
      <View style={styles.space}>
      </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#F5FCFF',
  },
  headImage: {
    width:Dimensions.get('window').width-30,
    height:200,
    resizeMode: 'stretch',
    alignSelf: 'center',
    paddingTop: 10,
  },
  space:{
    height: 10,
    backgroundColor: 'transparent',
  }
});
