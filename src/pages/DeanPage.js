import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper'
import commonStyle from '../styles/commonStyle'
import {deanImgs} from '../constants/deanPageData'
import { themeColor } from '../constants/theme';



export default class DeanPage extends Component {
  render() {
    const prevArrowComponent = <Text style={styles.buttonText}>‹</Text>
    const nextArrowComponent = <Text style={styles.buttonText}>›</Text>
    
    return (
      <View style={styles.container}>
        <View style={styles.pageWrapper}>          
          <Swiper 
            style={styles.deanPhoto} prevButton={prevArrowComponent} nextButton={nextArrowComponent}
            showsButtons={true} autoplay={true} height={280} showsPagination={true} activeDotColor={themeColor}
            >        
            {
              deanImgs.map((item,index) => <Image style={styles.deanPhotoImage} source={item} key={index}/>)
            }
          </Swiper>
          <View  style={styles.deanNameWrapper}>
            <Text style={styles.deanName}>孙伟</Text>
            <Text style={styles.deanJob}>教授</Text>              
          </View>
          <Text style={styles.companyDesc}>
            毕业于上海交大第一附院，
            中国医美首批整形外科专家；
            中国“人体美学整体形象设计与微整技术应用”医美理论发起者；
            世界LV脂肪内雕专有技术持有人；
            国际MNAA微创整形艺术联合会副主任委员；
            意大利光大集团等离子光纤技术指导专家；
            中韩、中日、中澳微整技术交流学者、合作医师；
            华纳国际影视中心大陆唯一指定整形美容专家；
            具有30年的临床经验，是齐鲁医美界旗帜式人物。
          </Text>
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
  deanPhoto: {
    height: '40%',
  },
  deanPhotoImage: {
    width: '100%',
    height: '100%',
  },
  buttonText: {
    color: themeColor,
    fontSize: 50
  },
  deanNameWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  deanName: {
    color: '#333333',
    fontSize: 30
  }, 
  deanJob: {
    color: '#999999',
    marginLeft: 5
  }, 
  companyDesc: {
    marginTop: 10,
    lineHeight: 30,   
  }
});
