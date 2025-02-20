import {RouteProp, useRoute} from '@react-navigation/native';
import {CombinedStacks} from './useAppNavigation';

export const useAppRoute = <S extends keyof CombinedStacks>() =>
  useRoute<RouteProp<CombinedStacks, S>>();
