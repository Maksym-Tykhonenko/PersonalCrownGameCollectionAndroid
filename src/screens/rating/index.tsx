/* eslint-disable react-native/no-inline-styles */
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../../constants/images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Player, usePlayerStore} from '../../store/playerStore';
import {Button} from '../../components/button';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Screens} from '../../navigation/screens';
import {Eye} from '../../assets/svg/eye';
import {styles} from './styles';

export const RatingScreen = () => {
  const {navigate} = useAppNavigation();
  const {players, punishment} = usePlayerStore();

  const validPlayers = players.filter(player => player.points > 0);
  const sortedPlayers = [...players].sort((a, b) => b.points - a.points);
  const winner = sortedPlayers[0];

  const getReorderedPlayers = (p: Player[]) => {
    if (p.length < 3) {
      return p;
    }
    const [first, second, ...rest] = p;
    return [second, first, ...rest];
  };

  const displayedPlayers = getReorderedPlayers(sortedPlayers);

  const maxPoints = Math.max(...sortedPlayers.map(player => player.points), 1);
  const maxHeight = 160;

  return (
    <ImageBackground source={IMAGES.background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> The Royal Verdict is in!</Text>
        {validPlayers.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <Text
              style={[
                styles.text,
                {textAlign: 'center', marginTop: 8, marginBottom: 40},
              ]}>
              The New Ruler of the Kingdom:{'\n'}
              <Text style={styles.winner}>{winner.name}</Text>
            </Text>

            <Image source={IMAGES.crown} style={styles.crown} />

            <View style={styles.ratingContainer}>
              {displayedPlayers.map(player => {
                const actualRank =
                  sortedPlayers.findIndex(p => p.name === player.name) + 1;

                const barHeight = (player.points / maxPoints) * maxHeight;

                return (
                  <View key={player.id} style={styles.barContainer}>
                    <Text style={styles.playerName}>{player.name}</Text>
                    <View style={styles.pointsContainer}>
                      <Text style={styles.points}>{player.points} points</Text>
                    </View>
                    <View style={[styles.bar, {height: barHeight}]}>
                      <Text style={styles.rank}>{actualRank}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <Text style={[styles.text, {marginBottom: 16}]}>
              Punishment for a looser: {punishment}
            </Text>
            <Button
              title="Play Again"
              onPress={() => navigate(Screens.GameStack)}
            />
          </ScrollView>
        ) : (
          <>
            <View style={{marginTop: 50}}>
              <View style={styles.wrapper}>
                <Eye />
              </View>
              <Text style={[styles.title, {marginBottom: 40}]}>
                No results found. {'\n'}
                {'\n'}Start a new game to see the rating.
              </Text>
            </View>
            <Button
              title="Start Game"
              onPress={() => navigate(Screens.GameStack)}
            />
          </>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};
