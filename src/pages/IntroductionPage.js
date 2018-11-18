import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import commonStyle from '../styles/commonStyle'
import {themeColor} from '../constants/theme'


export default class IntroductionPage extends Component {
  render() {
    const {navigation} = this.props;
    const {height,width} =  Dimensions.get('window')
    return (
      <ImageBackground source={require('../img/bg.jpg')} style={{width, height}}>
      
      <View style={styles.container}>
        <TouchableHighlight style={styles.section} onPress={()=>{
          navigation.navigate('CompanyPage')
        }}>
          <Text style={styles.sectionTit}>公司简介</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.section} onPress={()=>{
          navigation.navigate('ProjectPage')
        }}>
          <Text style={styles.sectionTit}>项目简介</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.section} onPress={()=>{
          navigation.navigate('HospitalPage')
        }}>
          <Text style={styles.sectionTit}>医院简介</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.section} onPress={()=>{
          navigation.navigate('DeanPage')
        }}>
          <Text style={styles.sectionTit}>院长简介</Text>
        </TouchableHighlight>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  ...commonStyle,
  container: {
    ...commonStyle.container,
    paddingTop: 40,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent'
  },  
  section: {
    width: '80%',
    height: '15%',
    backgroundColor: themeColor,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTit: {
    color: '#ffffff',
    fontSize: 40,
  },
});
