
import React from 'react'
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation'
import IntroductionPage from '../pages/IntroductionPage'
import FormPage from '../pages/FormPage'
import CompanyPage from '../pages/CompanyPage'
import ProjectPage from '../pages/ProjectPage'
import HospitalPage from '../pages/HospitalPage'
import DeanPage from '../pages/DeanPage'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const AppTabNavigator = TabNavigator({
  IntroductionPage:{
    screen:IntroductionPage,
    navigationOptions:{
			tabBarLabel:'介绍',
			tabBarIcon:({tintColor,focused})=>(
				<Ionicons
					name={focused?'ios-home':'ios-home-outline'}
					size={26}
					style={{color:tintColor}}
				/>
			)
    }
  },
  FormPage:{
    screen:FormPage,
    navigationOptions:{
			tabBarLabel:'顾客',
			tabBarIcon:({tintColor,focused})=>(
				<Ionicons
					name={focused?'ios-people':'ios-home-people'}
					size={26}
					style={{color:tintColor}}
				/>
			)
    }
  }
},{
    tabBarComponent:TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions:{
			activeTintColor:'#5dc890'
    }
})

export const AppStackNavigator = StackNavigator({
	TabNav:{
		screen:AppTabNavigator,
		navigationOptions:{
			title:'聚雅'
		}
	},
	IntroductionPage: {
		screen: IntroductionPage,
		navigationOptions:{
			title:'简介'
		}
	}, 
	FormPage: {
		screen: FormPage,
		navigationOptions:{
			title:'顾客'
		}
	},
	CompanyPage: {
		screen: CompanyPage,
		navigationOptions:{
			title:'公司简介'
		}
	}, 
	ProjectPage: {
		screen: ProjectPage,
		navigationOptions:{
			title:'项目简介'
		}
	},
	HospitalPage: {
		screen: HospitalPage,
		navigationOptions:{
			title:'医院简介'
		}
	}, 
	DeanPage: {
		screen: DeanPage,
		navigationOptions:{
			title:'院长简介'
		}
	},
	
},{
    navigationOptions:{
        // header:null
    }
})
