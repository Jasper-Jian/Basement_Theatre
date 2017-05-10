import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity

} from 'react-native';
const  window = Dimensions.get('window');

import News from '../More/News';
import Bar from '../More/Bar';
import Support from '../More/Support';
//const BAR = 'Bar';
export default class Menu extends Component{
    static propTypes={
        onItemSelected:React.PropTypes.func.isRequired,
    };
    render (){
        return (
            <ScrollView style={styles.menu} scrollsToTop={false}>

                <Text style={styles.item}
                    onPress={()=>this.props.onItemSelected('Home')}>Home</Text>
                <Text style={styles.item}
                    onPress={()=>this.props.onItemSelected('News')}>News</Text>
                <Text style={styles.item}
                    onPress={()=>this.props.onItemSelected('Bar')}>Bar</Text>
                <Text style={styles.item}
                    onPress={()=>this.props.onItemSelected('Support')}>Support</Text>
                <Text style={styles.item}
                    onPress={()=>this.props.onItemSelected('OurStory')}>Our Story</Text>
                <Text style={styles.item}
                    onPress={()=>this.props.onItemSelected('ForArtist')}>For Artist</Text>
                <Text style={styles.item}
                    onPress={()=>this.props.onItemSelected('Visit')}>Visit</Text>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    menu:{
      flex:1,
        width:window.width,
        height:window.height,
        backgroundColor:'white',
        padding:20
    },
    avatarContainer:{
        marginBottom:20,
        marginTop:20
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:20,
    },
    nickName:{
        position:'absolute',
        left:70,
        top:20,
        fontSize:18,
    },
    item:{
        fontSize:16,
        left: -60,
        fontWeight:'300',
        paddingTop:30,
        alignSelf: 'center',
        color: 'black'

    }
});
