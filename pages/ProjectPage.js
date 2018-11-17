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
          <View style={styles.projectTit}>
            <Text style={styles.projectTitleBig}>ART  艺雕</Text>
            <Text style={styles.projectTitleSmall}>艺雕塑形抗衰专有技术</Text>
          </View>
          <View style={styles.projectSec}>
            <Text style={styles.projectSecTit}>1.ART艺雕原理和技术核心</Text>
            <Text style={styles.projectSecDesc}>
              利用专业的设备，结含孙院长的专有技术，使激光
              能量溶解脂肪，同时离子能最刺激筋膜层胶原蛋白
              再生重组，启动皮肤自我修复能力，促进皮肤收
              紧，在雕塑完美体型的同时，使皮肤光滑紧致，呈
              现休龄年轻态！
            </Text>
          </View>
          <View style={styles.projectSec}>
            <Text style={styles.projectSecTit}>2.ART艺雕操作过程</Text>
            <Text style={styles.projectSecDesc}>
              通过0.2MM微创口将激光能量作用在皮下脂肪细
              胞，将溶解的脂肪引流出体外。操作时间根据不同
              的部位和毎个人的脂肪厚度不同而定，面部时间在
              40-60分钟，手臂或大腿1-2个小时左右。
            </Text>
          </View>
          <View style={styles.projectSec}>
            <Text style={styles.projectSecTit}>3.ART艺雕核心理念(比例协调）</Text>
            <Text style={styles.projectSecDesc}>
              980纳米等离子体激光
              360°能量均匀
              30万焦耳
              皮肤、脂肪、筋膜层
              激光能量作用脂肪层溶解脂肪
              离子能量作用筋膜层刺激胶原蛋白
              再生重组，收紧皮肤
              3天塑身衣
            </Text>
          </View>
          <View style={styles.projectSec}>
            <Text style={styles.projectSecTit}>4.项目四大优势</Text>
            <Text style={styles.projectSecDesc}>
              ①	效果立竿见影、保持时间持久
              ②	安全、无痛苦
              ③	随做随走、恢复期短、无不良反应
              ④     同时达到溶脂、塑形、紧肤、抗衰四大效果
              
              胖的有型  瘦的有样
            </Text>
          </View>
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
  projectTit: {
    fontSize: 20,
    marginTop: 10
  },
  projectTitleBig: {
    fontSize: 30,
    color: '#333333'
  },
  projectTitleSmall: {
    fontSize: 22,
    color: '#666666'
  },
  projectSec: {
    marginTop: 20,
    
  },
  projectSecDesc: {
    lineHeight: 30,
  }
});
