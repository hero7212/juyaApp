import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  ScrollView
} from 'react-native';
import commonStyle from '../styles/commonStyle'


export default class FormPage extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        
          <View style={styles.imgWrapper}>
            <Image style={styles.img} source={require('../img/form0.jpg')}/>
          </View>
          <View style={styles.imgWrapper}>
            <Image style={styles.img} source={require('../img/form1.jpg')}/>
          </View>
         
      </View>
      </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  ...commonStyle,
  imgWrapper: {
    height: 300,
    width: '100%'
  },
  img: {
    height: 300,
    width: '100%'
  }
});
