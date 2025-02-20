import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IMAGES} from '../../constants/images';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACHIEVEMENTS} from '../../data/achievements';

export const AchievementsScreen = () => {
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(
    [],
  );

  useEffect(() => {
    loadAchievements();
  }, []);

  const loadAchievements = async () => {
    try {
      const stored = await AsyncStorage.getItem('unlocked_achievements');
      if (stored) {
        setUnlockedAchievements(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load achievements:', error);
    }
  };

  const renderAchievement = ({item}: {item: (typeof ACHIEVEMENTS)[0]}) => {
    const isUnlocked = unlockedAchievements.includes(item.condition);

    return (
      <View style={styles.achievementItem}>
        {isUnlocked ? (
          <>
            <Image source={item.icon} style={styles.achievementIcon} />
            <Text style={styles.achievementText}>{item.title}</Text>
          </>
        ) : (
          <Image source={IMAGES.lock} style={styles.lockIcon} />
        )}
      </View>
    );
  };

  return (
    <ImageBackground source={IMAGES.background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Achievements</Text>
        <FlatList
          data={ACHIEVEMENTS}
          renderItem={renderAchievement}
          scrollEnabled={false}
          keyExtractor={item => item.id}
          numColumns={3}
          contentContainerStyle={styles.grid}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginVertical: 25,
    color: COLORS.white,
    fontSize: 28,
    fontFamily: FONTS.interMedium,
    textAlign: 'center',
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  achievementItem: {
    width: 120,
    height: 110,
    backgroundColor: '#2B2B2B',
    margin: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  achievementIcon: {
    width: 96,
    height: 86,
  },
  lockIcon: {
    width: 33,
    height: 59,
  },
  achievementText: {
    color: 'white',
    fontSize: 12,
  },
});
