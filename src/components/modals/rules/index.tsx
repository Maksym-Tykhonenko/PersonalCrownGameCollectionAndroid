/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableWithoutFeedback, Modal} from 'react-native';
import {styles} from './styles';
import {XClose} from '../../../assets/svg/x-close';

type RulesModalProps = {
  isModalVisible: boolean;
  toggleModalVisible: () => void;
};

export const RulesModal = ({
  isModalVisible,
  toggleModalVisible,
}: RulesModalProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isModalVisible}>
      <TouchableWithoutFeedback onPress={toggleModalVisible}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <XClose
              style={{alignSelf: 'flex-end'}}
              onPress={toggleModalVisible}
            />
            <Text style={styles.title}>Game rules</Text>
            <Text style={[styles.text, {marginTop: 8, marginBottom: 24}]}>
              Welcome to the royal game! Here, anyone can become a true monarch
              or the court jester!
            </Text>
            <Text style={styles.title}>🎭 How to Play:</Text>
            <Text style={styles.text}>
              - Gather your players (at least 2). The game is played on a single
              phone.{'\n'}-Start the game: press "Start Game" to begin the
              challenges.
              {'\n'}-Complete the challenges: each player takes turns
              participating in fun tasks.{'\n'}-Voting time: after all
              challenges, players vote for the best and worst performer.{'\n'}
              -Results: the game crowns the King or Queen of the Night, while
              the lowest-scoring player gets a fun penalty!
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
