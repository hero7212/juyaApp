
import React from 'react'
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation'
import IntroductionPage from '../pages/IntroductionPage'
import FormPage from '../pages/FormPage'
import CompanyPage from '../pages/CompanyPage'
import ProjectPage from '../pages/ProjectPage'
import HospitalPage from '../pages/HospitalPage'
import DeanPage from '../pages/DeanPage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import navHeaderStyles from './navHeaderStyles'
import {themeColor} from '../constants/theme'


export const AppTabNavigator = TabNavigator({
  IntroductionPage:{
    screen:IntroductionPage,
    navigationOptions:{
			tabBarLabel:'介绍',
			tabBarIcon:({tintColor,focused})=>(
				<Ionicons
					name={focused?'ios-home':'ios-home'}
					size={26}
					style={{color:tintColor}}
				/>
			),
		},
  },
  FormPage:{
    screen:FormPage,
    navigationOptions:{
			tabBarLabel:'顾客',
			tabBarIcon:({tintColor,focused})=>(
				<Ionicons
					name={focused?'ios-people':'ios-people'}
					size={26}
					style={{color:tintColor}}
				/>
			),
		}
  }
},{
    tabBarComponent:TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions:{
			activeTintColor: '#ffffff',
			inactiveTintColor: '#333333',
			style: {
				backgroundColor: themeColor
			}
    }
})

export const AppStackNavigator = StackNavigator({
	TabNav:{
		screen:AppTabNavigator,
		navigationOptions:{
			title:'聚雅生物科技有限公司',
			headerStyle: {
				backgroundColor: themeColor
			},
			headerTitleStyle: {
				color: '#ffffff'
			}
		}
	},
	IntroductionPage: {
		screen: IntroductionPage,
		navigationOptions:{
			title:'简介',
			headerStyle: {
				backgroundColor: themeColor
			},
			headerTitleStyle: {
				color: '#ffffff'
			}
		}
	}, 
	FormPage: {
		screen: FormPage,
		navigationOptions:{
			title:'顾客',
			headerStyle: {
				backgroundColor: themeColor
			},
			headerTitleStyle: {
				color: '#ffffff'
			}
		}
	},
	CompanyPage: {
		screen: CompanyPage,
		navigationOptions:{
			title:'公司简介',
			...navHeaderStyles
		}
	}, 
	ProjectPage: {
		screen: ProjectPage,
		navigationOptions:{
			title:'项目简介',
			...navHeaderStyles
		}
	},
	HospitalPage: {
		screen: HospitalPage,
		navigationOptions:{
			title:'医院简介',
			...navHeaderStyles
		}
	}, 
	DeanPage: {
		screen: DeanPage,
		navigationOptions:{
			title:'院长简介',
			...navHeaderStyles
		}
	},
	
},{
    navigationOptions:{
        // header:null
    }
})
