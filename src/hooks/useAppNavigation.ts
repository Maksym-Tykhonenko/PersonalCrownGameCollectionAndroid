import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StackParams} from '../navigation/types';

export type CombinedStacks = StackParams.Tabs &
  StackParams.Main &
  StackParams.Game;

export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<CombinedStacks>>();
