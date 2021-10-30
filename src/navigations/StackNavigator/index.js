import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigator from "../TabNavigator";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
    </Stack.Navigator>
  );
}

export default MainStack;
