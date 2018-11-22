import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Avatar, Card, List, ListItem } from 'react-native-elements'
import commonStyle from '../styles/commonStyle'
import {themeColor} from '../constants/theme'
import {vipList} from '../constants/vipPageData'


export default class VipPage extends Component {
  render() {
		const {navigation} = this.props;
    return (
      <View style={styles.container}>
				<Card title="金卡会员" titleStyle={styles.cardTitle} containerStyle={styles.cardContainer}>
					<View style={styles.cardContent}>
						<Avatar
							large
							rounded
							source={{uri: "http://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
							avatarStyle={styles.nickAvatar}
						/>
						<Text style={styles.nickName}>用户昵称</Text>
					</View>
					<View>
						<List>
							{
								vipList.map((item) => (
									<ListItem onPress={() => {
										navigation.navigate(item.nav)
									}}
										key={item.id}
										title={item.title}
									/>
								))
							}
						</List>
					</View>
				</Card>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
	...commonStyle,
	cardTitle: {
		color: themeColor
	},
  cardContainer: {
		width: '100%',
		height: '100%',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	nickAvatar: {
		flex: 1
	},
	nickName: {
		flex: 3,
		marginLeft: 15
	}
});
