import React, {useEffect, useState} from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './styles';

type DropdownInputProps = {
  dataPickedValue?: {label: string; value: string};
  onValueChange?: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export const genderData = [
  {label: 'Female', value: 'female'},
  {label: 'Male', value: 'male'},
];

export const DropdownInput = ({
  dataPickedValue,
  onValueChange,
  containerStyle,
}: DropdownInputProps) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    dataPickedValue?.value,
  );

  useEffect(() => {
    setSelectedValue(dataPickedValue?.value);
  }, [dataPickedValue]);

  const handleChange = (item: {label: string; value: string}) => {
    setSelectedValue(item.value);
    onValueChange?.(item.value);
  };

  const renderItem = (item: {label: string}) => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
    </View>
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>Gender</Text>
      <Dropdown
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle={styles.dropdownContent}
        data={genderData}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="Select"
        value={selectedValue}
        onChange={handleChange}
        renderItem={renderItem}
      />
    </View>
  );
};
