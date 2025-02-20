import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParams} from '../types';
import {Screens} from '../screens';
import {GameSetupScreen} from '../../screens/game-setup';
import {GameLevelScreen} from '../../screens/game-level';
import {GameScreen} from '../../screens/game';
import {GameSummaryScreen} from '../../screens/game-summary';
import {GameVotingScreen} from '../../screens/game-voting';

const Stack = createNativeStackNavigator<StackParams.Game>();

export const GameStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.GameSetup} component={GameSetupScreen} />
      <Stack.Screen name={Screens.GameLevel} component={GameLevelScreen} />
      <Stack.Screen name={Screens.Game} component={GameScreen} />
      <Stack.Screen name={Screens.GameVoting} component={GameVotingScreen} />
      <Stack.Screen name={Screens.GameSummary} component={GameSummaryScreen} />
    </Stack.Navigator>
  );
};
