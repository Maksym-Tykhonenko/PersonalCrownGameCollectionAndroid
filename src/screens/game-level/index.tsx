/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../constants/images';
import {Button} from '../../components/button';
import {Logo} from '../../assets/svg/logo';
import {Notebook} from '../../assets/svg/notebook';
import {RulesModal} from '../../components/modals/rules';
import {COLORS} from '../../constants/colors';
import {Star} from '../../assets/svg/star';
import {levelsData} from '../../data/levels';
import {styles} from './styles';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Screens} from '../../navigation/screens';

export const GameLevelScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(1);

  const {navigate} = useAppNavigation();

  const toggleModalVisible = () => {
    setIsModalVisible(prevState => !prevState);
  };

  const handleStarPress = (level: number) => {
    setSelectedLevel(level);
  };

  const renderStars = (level: number) => {
    return [1, 2, 3].map(star => (
      <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
        <Star
          fill={star <= level ? COLORS.gradientStart : COLORS.lightGrey}
          stroke={star <= level ? COLORS.gradientEnd : COLORS.black}
        />
      </TouchableOpacity>
    ));
  };

  const currentLevelData = levelsData[selectedLevel - 1];

  return (
    <ImageBackground source={IMAGES.background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 70}}
          showsVerticalScrollIndicator={false}>
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
          <View style={styles.levels}>
            <Text style={styles.title}>Game levels</Text>
            <View style={styles.levelsContent}>
              <View style={styles.stars}>{renderStars(selectedLevel)}</View>
              <Text style={styles.levelTitle}>{currentLevelData.title}</Text>
              <Text style={styles.description}>
                {currentLevelData.description}
              </Text>
              <Button
                title="Select this level"
                onPress={() => navigate(Screens.Game, {level: selectedLevel})}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
