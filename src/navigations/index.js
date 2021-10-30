import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from "./StackNavigator";

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
