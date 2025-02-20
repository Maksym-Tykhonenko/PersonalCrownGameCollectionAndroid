/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableWithoutFeedback, Modal} from 'react-native';
import {styles} from './styles';
import {SecondaryButton} from '../../secondary-button';
import {Button} from '../../button';

type ResetDataModalProps = {
  isModalVisible: boolean;
  toggleModalVisible: () => void;
  onPressReset: () => void;
};

export const ResetDataModal = ({
  isModalVisible,
  toggleModalVisible,
  onPressReset,
}: ResetDataModalProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isModalVisible}>
      <TouchableWithoutFeedback onPress={toggleModalVisible}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Are you sure that you want to reset all data?
              </Text>
            </View>
            <Button
              title="Reset"
              onPress={onPressReset}
              containerStyle={{marginBottom: 12}}
            />
            <SecondaryButton title="Cancel" onPress={toggleModalVisible} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
