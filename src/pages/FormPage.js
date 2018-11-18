import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import commonStyle from '../styles/commonStyle'


export default class FormPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>form</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...commonStyle
});
