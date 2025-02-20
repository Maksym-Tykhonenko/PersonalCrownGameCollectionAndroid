import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParams} from '../types';
import {Screens} from '../screens';
import {WelcomeScreen} from '../../screens/welcome';
import {TabStack} from './tabs';

const Stack = createNativeStackNavigator<StackParams.Main>();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.Welcome} component={WelcomeScreen} />
      <Stack.Screen name={Screens.Tabs} component={TabStack} />
    </Stack.Navigator>
  );
};
