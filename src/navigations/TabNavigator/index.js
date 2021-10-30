import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../../screens/HomeScreen";
import HomeTabBar from "./HomeTabBar";
import MyPageScreen from "../../screens/MyPageScreen";
import BookScreen from "../../screens/BookScreen";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <HomeTabBar {...props} />} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{title: ""}}/>
      <Tab.Screen name="MyPage" component={MyPageScreen} options={{title: ""}}/>
      <Tab.Screen name="Book" component={BookScreen} options={{title: ""}}/>
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;
