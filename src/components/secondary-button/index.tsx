import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'cancel';
  containerStyle?: StyleProp<ViewStyle>;
};

export const SecondaryButton = ({
  title,
  onPress,
  variant,
  containerStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.title, variant === 'cancel' && styles.cancelText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
