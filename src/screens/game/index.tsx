/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../constants/images';
import {Notebook} from '../../assets/svg/notebook';
import {RulesModal} from '../../components/modals/rules';
import {ArrowLeft} from '../../assets/svg/arrow-left';
import {Button} from '../../components/button';
import {SecondaryButton} from '../../components/secondary-button';
import {Timer} from '../../components/timer';
import {styles} from './styles';
import {useAppRoute} from '../../hooks/useAppRoute';
import {Screens} from '../../navigation/screens';
import {gameTasks} from '../../data/tasks';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {usePlayerStore} from '../../store/playerStore';
import {trackGamesPlayed, trackLevelCompletion} from '../../utils/achievements';

export const GameScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const {params} = useAppRoute<Screens.Game>();
  const {goBack, navigate} = useAppNavigation();
  const {players, addPoints} = usePlayerStore();

  const levelData = gameTasks.find(level => level.id === params.level);
  const tasks = levelData ? levelData.tasks : [];

  const [randomPlayer, setRandomPlayer] = useState<string | null>(null);

  useEffect(() => {
    if (players.length > 0) {
      const randomIndex = Math.floor(Math.random() * players.length);
      setRandomPlayer(players[randomIndex].name);
    }
  }, [currentTaskIndex, players]);

  const toggleModalVisible = () => {
    setIsModalVisible(prevState => !prevState);
  };

  const handleTaskCompletion = async (points: number) => {
    if (randomPlayer) {
      addPoints(randomPlayer, points);
    }

    if (currentTaskIndex < tasks.length - 1) {
      setCurrentTaskIndex(prev => prev + 1);
    } else {
      await trackGamesPlayed();
      await trackLevelCompletion(params.level);
      navigate(Screens.GameVoting);
    }
  };

  return (
    <ImageBackground source={IMAGES.background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 70}}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.icon} onPress={goBack}>
              <ArrowLeft />
            </TouchableOpacity>
            <Text style={styles.title}>{levelData?.level}</Text>
            <TouchableOpacity style={styles.icon} onPress={toggleModalVisible}>
              <Notebook />
            </TouchableOpacity>
          </View>

          <RulesModal
            isModalVisible={isModalVisible}
            toggleModalVisible={toggleModalVisible}
          />
          <Text style={styles.task}>{randomPlayer}</Text>

          {tasks.length > 0 && (
            <ImageBackground
              source={IMAGES.game}
              style={{
                height: 500,
                paddingVertical: 5,
                marginTop: 16,
              }}>
              <View style={styles.taskContainer}>
                <View>
                  <Text style={[styles.task, {marginBottom: 12}]}>
                    {tasks[currentTaskIndex].name}
                  </Text>
                  <Text style={styles.taskDescription}>
                    – {tasks[currentTaskIndex].description}
                  </Text>
                </View>
                <Timer key={currentTaskIndex} isPaused={isModalVisible} />
                <View style={{gap: 16}}>
                  <Button
                    title="Done"
                    onPress={() => handleTaskCompletion(10)}
                  />
                  <SecondaryButton
                    title="Skip"
                    onPress={() => handleTaskCompletion(0)}
                  />
                </View>
              </View>
            </ImageBackground>
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
