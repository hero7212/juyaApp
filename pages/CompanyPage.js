import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import commonStyle from '../styles/commonStyle'


export default class CompanyPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageWrapper}>
          <Text style={styles.companyDesc}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;青岛灏钰精准生物技术有限公司于2016年05月06日成立。法定代表人仲建新,公司经营范围包括：医疗技术研发；医疗技术咨询；干细胞存储、制备；生物技术诊疗；医用药品、保健食品（凭许可证经营）、医疗器械的研发、生产及销售（不得在此住所生产，凭许可证经营）；企业管理咨询；会展服务等。</Text>
        </View>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...commonStyle,
  container: {
    ...commonStyle.container,
    justifyContent: 'flex-start',
  },
  companyDesc: {
    lineHeight: 30,   
  }
});
