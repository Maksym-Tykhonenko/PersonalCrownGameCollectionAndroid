/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../constants/images';
import {Button} from '../../components/button';
import {Logo} from '../../assets/svg/logo';
import {Notebook} from '../../assets/svg/notebook';
import {RulesModal} from '../../components/modals/rules';
import {Plus} from '../../assets/svg/plus';
import {CreatePlayerModal} from '../../components/modals/create-player';
import {usePlayerStore} from '../../store/playerStore';
import {Female} from '../../assets/svg/female';
import {Male} from '../../assets/svg/male';
import {User} from '../../assets/svg/user';
import {styles} from './styles';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Screens} from '../../navigation/screens';

export const GameSetupScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreatePlayerModalVisible, setIsCreatePlayerModalVisible] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {players} = usePlayerStore();
  const {navigate} = useAppNavigation();

  const toggleModalVisible = () => {
    setIsModalVisible(prevState => !prevState);
  };

  const toggleCreatePlayerModalVisible = () => {
    setIsCreatePlayerModalVisible(prevState => !prevState);
  };

  const handleStartGame = () => {
    if (players.length !== 3) {
      setErrorMessage('3 players are required to start the game.');
      return;
    }
    setErrorMessage('');
    navigate(Screens.GameLevel);
  };

  useEffect(() => {
    if (players.length >= 2) {
      setErrorMessage('');
    }
  }, [players]);

  return (
    <ImageBackground source={IMAGES.background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Logo />
          <TouchableOpacity style={styles.icon} onPress={toggleModalVisible}>
            <Notebook />
          </TouchableOpacity>
        </View>

        <RulesModal
          isModalVisible={isModalVisible}
          toggleModalVisible={toggleModalVisible}
        />
        <View style={styles.players}>
          <Text style={styles.title}>Players</Text>
          {players.map(player => (
            <View key={player.id} style={[styles.row, styles.addPlayer]}>
              <View style={styles.addIcon}>
                <User />
              </View>
              <Text style={styles.text}>{player.name}</Text>
              <View style={styles.genderIcon}>
                {player.gender === 'female' ? <Female /> : <Male />}
              </View>
            </View>
          ))}
          {players.length < 3 && (
            <View style={[styles.row, styles.addPlayer]}>
              <Pressable
                onPress={toggleCreatePlayerModalVisible}
                style={styles.addIcon}>
                <Plus />
              </Pressable>
              <Text style={styles.text}>Add player</Text>
            </View>
          )}

          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
          <Button
            title="Start Game"
            onPress={handleStartGame}
            containerStyle={{marginTop: 30}}
          />
        </View>

        <CreatePlayerModal
          isModalVisible={isCreatePlayerModalVisible}
          toggleModalVisible={toggleCreatePlayerModalVisible}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
