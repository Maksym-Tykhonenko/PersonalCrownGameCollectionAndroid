/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../constants/images';
import {Button} from '../../components/button';
import {styles} from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Delete} from '../../assets/svg/delete';
import {unlockAchievement} from '../../utils/achievements';

export const AlbumScreen = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const savedPhotos = await AsyncStorage.getItem('photos');
      if (savedPhotos) {
        setPhotos(JSON.parse(savedPhotos));
      }
    };
    loadPhotos();
  }, []);

  const savePhotos = async (newPhotos: string[]) => {
    await AsyncStorage.setItem('photos', JSON.stringify(newPhotos));
  };

  const handleAddPhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, async response => {
      if (response.assets && response.assets.length > 0) {
        const newPhotos = [...photos, response.assets[0].uri!];
        setPhotos(newPhotos);
        await savePhotos(newPhotos);

        if (newPhotos.length === 4) {
          unlockAchievement('uploaded_4_photos');
        }
      }
    });
  };

  const handleDeletePhoto = (uri: string) => {
    Alert.alert('Delete Photo', 'Are you sure you want to delete this photo?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          const updatedPhotos = photos.filter(photo => photo !== uri);
          setPhotos(updatedPhotos);
          savePhotos(updatedPhotos);
        },
      },
    ]);
  };

  const renderEmptyComponent = () => (
    <Text style={[styles.text, {marginTop: 200}]}>Add your first photo!</Text>
  );

  return (
    <ImageBackground source={IMAGES.background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Royal Album</Text>
        <Text style={styles.text}>
          Save your best moments! Add photos from the game and relive the fun.
        </Text>
        <FlatList
          data={photos}
          keyExtractor={item => item}
          numColumns={2}
          columnWrapperStyle={styles.photoContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyComponent}
          renderItem={({item}) => (
            <View style={styles.photoWrapper}>
              <Image source={{uri: item}} style={styles.photo} />
              <Pressable
                style={styles.deleteIcon}
                onPress={() => handleDeletePhoto(item)}>
                <Delete />
              </Pressable>
            </View>
          )}
        />
        <Button
          title="Add New Photo"
          onPress={handleAddPhoto}
          containerStyle={styles.button}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
