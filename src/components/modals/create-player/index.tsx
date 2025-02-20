/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Modal, TextInput} from 'react-native';
import {styles} from './styles';
import {} from '../../secondary-button';
import {Button} from '../../button';
import {COLORS} from '../../../constants/colors';
import {DropdownInput, genderData} from '../../dropdown-input';
import {usePlayerStore} from '../../../store/playerStore';
import {XClose} from '../../../assets/svg/x-close';

type CreatePlayerModalProps = {
  isModalVisible: boolean;
  toggleModalVisible: () => void;
};

export const CreatePlayerModal = ({
  isModalVisible,
  toggleModalVisible,
}: CreatePlayerModalProps) => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);

  const addPlayer = usePlayerStore(state => state.addPlayer);

  const handleSave = () => {
    if (name.trim() === '' || !gender) {
      setError('Please enter name and gender');
      return;
    }

    addPlayer({
      id: Date.now(),
      name,
      gender,
      points: 0,
    });

    setName('');
    setGender(undefined);
    setError(null);

    toggleModalVisible();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isModalVisible}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <XClose
            style={{alignSelf: 'flex-end'}}
            onPress={() => {
              toggleModalVisible();
              setName('');
              setGender(undefined);
              setError(null);
            }}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Create player</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter player name"
              value={name}
              placeholderTextColor={COLORS.inputLabel}
              onChangeText={text => {
                setName(text);
                if (error) {
                  setError(null);
                }
              }}
            />
          </View>
          <DropdownInput
            containerStyle={styles.dropdown}
            onValueChange={setGender}
            dataPickedValue={
              gender
                ? genderData.find(item => item.value === gender)
                : undefined
            }
          />

          {error && <Text style={styles.error}>{error}</Text>}

          <Button title="Save" onPress={handleSave} />
        </View>
      </View>
    </Modal>
  );
};
