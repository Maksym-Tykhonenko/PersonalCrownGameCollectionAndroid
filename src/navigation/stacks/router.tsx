import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './main';
import {unlockAchievement} from '../../utils/achievements';

export function Router() {
  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      if (hour < 10) {
        unlockAchievement('open_morning');
      } else if (hour >= 22) {
        unlockAchievement('open_night');
      }
    };

    checkTime();
  }, []);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
