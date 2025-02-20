/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Button} from '../../components/button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/colors';
import {Headphones} from '../../assets/svg/headphones';
import {SecondaryButton} from '../../components/secondary-button';
import {Edit} from '../../assets/svg/edit';
import {DateInput} from '../../components/date-input';
import {IMAGES} from '../../constants/images';
import {DropdownInput, genderData} from '../../components/dropdown-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import email from 'react-native-email';
import {ResetDataModal} from '../../components/modals/reset-data';
import {styles} from './styles';
import {unlockAchievement} from '../../utils/achievements';

const PROFILE_KEY = 'USER_PROFILE';

export const ProfileScreen = () => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [date, setDate] = useState<Date | null>(null);
  const [gender, setGender] = useState<string | undefined>();
  const [localAvatarUri, setLocalAvatarUri] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const savedProfile = await AsyncStorage.getItem(PROFILE_KEY);
        if (savedProfile) {
          const parsedProfile = JSON.parse(savedProfile);
          setName(parsedProfile.name || '');
          setLastName(parsedProfile.lastName || '');
          setDate(parsedProfile.date ? new Date(parsedProfile.date) : null);
          setGender(parsedProfile.gender || undefined);
          setLocalAvatarUri(parsedProfile.avatarUri || null);
        }
      } catch (error) {
        console.error('Failed to load profile:', error);
      }
    };

    loadProfile();
  }, []);

  const showMessage = (message: string) => {
    setStatusMessage(message);
    setTimeout(() => {
      setStatusMessage(null);
    }, 3000);
  };

  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        const newUri: string | null = response.assets[0].uri ?? null;
        setLocalAvatarUri(newUri);
      } else if (response.didCancel) {
      } else {
        showMessage('Something went wrong');
      }
    });
  };

  const handleSave = async () => {
    try {
      const profileData = {
        name,
        lastName,
        date: date ? date.toISOString() : null,
        gender,
        avatarUri: localAvatarUri,
      };
      await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(profileData));
      showMessage('Information Saved!');

      if (
        profileData.name &&
        profileData.lastName &&
        profileData.date &&
        profileData.gender &&
        profileData.avatarUri
      ) {
        unlockAchievement('complete_profile');
      }
    } catch (error) {
      showMessage('Failed to save information.');
      console.error('Save error:', error);
    }
  };

  const handleReset = async () => {
    try {
      await AsyncStorage.removeItem(PROFILE_KEY);
      setName('');
      setLastName('');
      setDate(null);
      setGender(undefined);
      setLocalAvatarUri(null);

      showMessage('Reset Completed!');
    } catch (error) {
      showMessage('Failed to reset information.');
      console.error('Reset error:', error);
    }
  };

  const handleSupport = () => {
    const to = 'aneckogri@gmail.com';

    email(to, {
      subject: 'Support Request',
      body: 'Hello, I need assistance with...',
      checkCanOpen: false,
    }).catch(error => {
      console.error('Error opening email client:', error);
    });
  };

  const toggleModalVisible = () => {
    setIsModalVisible(prevState => !prevState);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ImageBackground source={IMAGES.background} style={{flex: 1}}>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.title}>Edit Profile</Text>
                <TouchableOpacity
                  style={styles.support}
                  onPress={handleSupport}>
                  <Headphones />
                </TouchableOpacity>
              </View>
              <View style={{height: 40}}>
                <Text style={styles.statusText}>{statusMessage}</Text>
              </View>
            </View>
            <View>
              <Image
                source={localAvatarUri ? {uri: localAvatarUri} : IMAGES.avatar}
                style={styles.avatar}
                resizeMode="cover"
              />
              <TouchableOpacity onPress={selectImage} style={styles.edit}>
                <Edit />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{gap: 20}}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                placeholderTextColor={COLORS.inputLabel}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nickname</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your nickname"
                value={lastName}
                placeholderTextColor={COLORS.inputLabel}
                onChangeText={setLastName}
              />
            </View>
            
          </View>
          <View style={{flexDirection: 'row', gap: 12}}>
            <SecondaryButton
              title="Reset"
              onPress={toggleModalVisible}
              containerStyle={{flex: 1}}
            />
            <Button
              title={'Save'}
              onPress={handleSave}
              containerStyle={{flex: 1}}
            />
          </View>
          <ResetDataModal
            onPressReset={() => {
              handleReset();
              handleCloseModal();
            }}
            isModalVisible={isModalVisible}
            toggleModalVisible={handleCloseModal}
          />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
