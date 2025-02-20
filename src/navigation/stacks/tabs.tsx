/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackParams} from '../types';
import {COLORS} from '../../constants/colors';
import {ProfileScreen} from '../../screens/profile';
import {AlbumScreen} from '../../screens/album';
import {Screens} from '../screens';
import {Home} from '../../assets/svg/home';
import {Album} from '../../assets/svg/album';
import {StarTab} from '../../assets/svg/star-tab';
import {UserTab} from '../../assets/svg/user-tab';
import {CrownTab} from '../../assets/svg/crown-tab';
import {GameStack} from './game';
import {RatingScreen} from '../../screens/rating';
import {AchievementsScreen} from '../../screens/achievements';

const Tab = createBottomTabNavigator<StackParams.Tabs>();

const getTabBarIcon = (
  focused: boolean,
  IconInactive: React.ReactNode,
  IconActive: React.ReactNode,
) => {
  return focused ? (
    <View
      style={{
        backgroundColor: COLORS.gradientStart,
        borderRadius: 40,
        padding: 10,
      }}>
      {IconActive}
    </View>
  ) : (
    IconInactive
  );
};

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.black,
          borderRadius: 100,
          height: 72,
          paddingTop: 16,
          marginHorizontal: 24,
          // marginBottom: 10,
          position: 'absolute',
          borderColor: COLORS.gradientStart,
          borderWidth: 1,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={Screens.GameStack}
        component={GameStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(
              focused,
              <Home color={COLORS.grey} />,
              <Home color={COLORS.black} />,
            ),
        }}
      />
      <Tab.Screen
        name={Screens.Rating}
        component={RatingScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(
              focused,
              <CrownTab color={COLORS.grey} />,
              <CrownTab color={COLORS.black} />,
            ),
        }}
      />
      <Tab.Screen
        name={Screens.Album}
        component={AlbumScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(
              focused,
              <Album color={COLORS.grey} />,
              <Album color={COLORS.black} />,
            ),
        }}
      />
      <Tab.Screen
        name={Screens.Achievements}
        component={AchievementsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(
              focused,
              <StarTab color={COLORS.grey} />,
              <StarTab color={COLORS.black} />,
            ),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(
              focused,
              <UserTab color={COLORS.grey} />,
              <UserTab color={COLORS.black} />,
            ),
        }}
      />
    </Tab.Navigator>
  );
};
