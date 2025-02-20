import AsyncStorage from '@react-native-async-storage/async-storage';

export const unlockAchievement = async (condition: string) => {
  try {
    const stored = await AsyncStorage.getItem('unlocked_achievements');
    const achievements = stored ? JSON.parse(stored) : [];

    if (!achievements.includes(condition)) {
      const updatedAchievements = [...achievements, condition];
      await AsyncStorage.setItem(
        'unlocked_achievements',
        JSON.stringify(updatedAchievements),
      );
    }
  } catch (error) {
    console.error('Failed to save achievement:', error);
  }
};

export const trackGamesPlayed = async () => {
  try {
    const storedGames = await AsyncStorage.getItem('games_played');
    const gamesPlayed = storedGames ? parseInt(storedGames, 10) : 0;

    const newTotalGames = gamesPlayed + 1;
    await AsyncStorage.setItem('games_played', newTotalGames.toString());

    if (newTotalGames === 1) {
      unlockAchievement('first_game');
    }
    if (newTotalGames === 5) {
      unlockAchievement('five_games');
    }
    if (newTotalGames === 10) {
      unlockAchievement('ten_games');
    }
  } catch (error) {
    console.error('Error tracking games played:', error);
  }
};

export const trackLevelCompletion = async (level: number) => {
  try {
    const storedLevels = await AsyncStorage.getItem('played_levels');
    let playedLevels = storedLevels ? JSON.parse(storedLevels) : [];

    if (!playedLevels.includes(level)) {
      playedLevels.push(level);
      await AsyncStorage.setItem('played_levels', JSON.stringify(playedLevels));

      if (level === 1) {
        unlockAchievement('played_royal_banquet');
      }
      if (level === 2) {
        unlockAchievement('played_throne_wars');
      }
      if (level === 3) {
        unlockAchievement('played_kings_trial');
      }
    }
  } catch (error) {
    console.error('Error tracking played levels:', error);
  }
};
