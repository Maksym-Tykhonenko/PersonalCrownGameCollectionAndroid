import {Pressable, Text, View} from 'react-native';
import {DateTime} from 'luxon';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {COLORS} from '../../constants/colors';
import {styles} from './styles';

type DateInputProps = {
  label: string;
  placeholder?: string;
  value: Date | null;
  onChange: (date: Date) => void;
};

export const DateInput = ({
  label,
  placeholder = 'DD/MM/YY',
  value,
  onChange,
}: DateInputProps) => {
  const [open, setOpen] = useState(false);

  const handleConfirm = (pickedDate: Date) => {
    setOpen(false);
    onChange(pickedDate);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handlePress = () => {
    setOpen(true);
  };

  const textColor = value ? COLORS.white : COLORS.inputLabel;
  const displayText = value
    ? DateTime.fromJSDate(value).toFormat('dd/MM/yy')
    : placeholder;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={handlePress}>
        <Text style={[styles.placeholderText, {color: textColor}]}>
          {displayText}
        </Text>
        <DatePicker
          modal
          mode="date"
          date={value || new Date()}
          open={open}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </Pressable>
    </View>
  );
};
