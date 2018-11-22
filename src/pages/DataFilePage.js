import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import commonStyle from '../styles/commonStyle'


export default class DataFilePage extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Text>DataFilePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	...commonStyle,
});
