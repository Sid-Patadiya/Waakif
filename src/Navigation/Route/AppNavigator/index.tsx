import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppStack} from '../../../constant/String';
import OnBoarding from '../../../Screen/OnBoarding/OnBoarding';
import TabNavigator from '../TabNavigator/TabNavigator';

const Stack = createStackNavigator();

export default function AppNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AppStack.OnBoarding} component={OnBoarding} />
      <Stack.Screen name={AppStack.TabNavigation} component={TabNavigator} />
    </Stack.Navigator>
  );
}
