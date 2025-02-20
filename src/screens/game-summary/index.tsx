import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../constants/images';
import {styles} from './styles';
import {Eye} from '../../assets/svg/eye';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Screens} from '../../navigation/screens';

export const GameSummaryScreen = () => {
  const {navigate, popToTop} = useAppNavigation();

  return (
    <ImageBackground source={IMAGES.background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.wrapper}
            onPress={() => {
              navigate(Screens.Rating);
              popToTop();
            }}>
            <Eye />
          </TouchableOpacity>
          <Text style={styles.title}>
            The game is over! It's time to find out who is the real king of the
            party!
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
