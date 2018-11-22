import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import commonStyle from '../styles/commonStyle'


export default class ReVisitPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sec}>
          <Text style={styles.nickName}>用户名</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...commonStyle.container,
    justifyContent: 'flex-start',
  },
  sec: {
    width: '90%',
    height: 120,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
  },
  nickName: {
    color: '#eeeeee'
  }
});
