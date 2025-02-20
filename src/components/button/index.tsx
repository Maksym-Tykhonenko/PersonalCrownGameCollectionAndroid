import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Button = ({title, onPress, containerStyle}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <LinearGradient
        colors={[COLORS.gradientStart, COLORS.gradientEnd]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
