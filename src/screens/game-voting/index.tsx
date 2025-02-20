import {ImageBackground, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../constants/images';
import {styles} from './styles';
import {Button} from '../../components/button';
import {usePlayerStore} from '../../store/playerStore';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Screens} from '../../navigation/screens';
import {punishments} from '../../data/punishments';
import {unlockAchievement} from '../../utils/achievements';

const questions = [
  {id: '1', text: 'Who was the most... Brave?'},
  {id: '2', text: 'Who was the most... Clever?'},
  {id: '3', text: 'Who was the most... Entertaining?'},
];

export const GameVotingScreen = () => {
  const {players, submitVote, addPoints, savePunishment} = usePlayerStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {navigate} = useAppNavigation();

  const handleVote = () => {
    if (selectedPlayer) {
      submitVote({
        question: questions[currentQuestionIndex].id,
        playerName: selectedPlayer,
      });

      addPoints(selectedPlayer, 15);

      const updatedPlayer = players.find(
        player => player.name === selectedPlayer,
      );
      if (updatedPlayer) {
        const newScore = updatedPlayer.points + 15;

        if (newScore >= 100) {
          unlockAchievement('score_100_points');
        }
        if (newScore >= 200) {
          unlockAchievement('score_200_points');
        }
      }

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedPlayer(null);
        setError(null);
      } else {
        const randomPunishment =
          punishments[Math.floor(Math.random() * punishments.length)];

        savePunishment(randomPunishment);
        navigate(Screens.GameSummary);
      }
    } else {
      setError('Please select a player.');
    }
  };

  return (
    <ImageBackground source={IMAGES.background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>It’s time for Voting!</Text>
        <Text style={styles.question}>
          {questions[currentQuestionIndex].text}
        </Text>
        {players.map(player => (
          <View style={styles.playerOption} key={player.id}>
            <Pressable
              style={styles.radioButton}
              onPress={() => {
                setSelectedPlayer(player.name);
                setError(null);
              }}>
              {selectedPlayer === player.name && (
                <View style={styles.radioSelected} />
              )}
            </Pressable>
            <Text style={styles.text}>{player.name}</Text>
          </View>
        ))}
        <Text style={styles.error}>{error}</Text>
        <Button title="Submit Votes" onPress={handleVote} />
      </SafeAreaView>
    </ImageBackground>
  );
};
