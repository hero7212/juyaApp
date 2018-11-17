import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import commonStyle from '../styles/commonStyle'


export default class IntroductionPage extends Component {
  render() {
    const {navigation} = this.props;
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  ...commonStyle,
  section: {
    width: '80%',
    height: '15%',
    backgroundColor: '#5dc890',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTit: {
    color: '#ffffff',
    fontSize: 40,
  },
});
