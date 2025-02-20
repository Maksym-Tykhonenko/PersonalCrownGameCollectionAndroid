import {ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../constants/images';
import {Button} from '../../components/button';
import {Logo} from '../../assets/svg/logo';
import {styles} from './styles';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Screens} from '../../navigation/screens';

export const WelcomeScreen = () => {
  const {navigate} = useAppNavigation();

  return (
    <ImageBackground source={IMAGES.splash} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Logo />
        <View>
          <Text style={styles.title}>
            Welcome to the <Text style={styles.white}>Crown!</Text> Are you
            ready to <Text style={styles.white}>win</Text> and{' '}
            <Text style={styles.white}>become</Text> the{' '}
            <Text style={styles.white}>main ruler</Text> of the party?
          </Text>
        </View>
        <Button title="Get started" onPress={() => navigate(Screens.Tabs)} />
      </SafeAreaView>
    </ImageBackground>
  );
};
