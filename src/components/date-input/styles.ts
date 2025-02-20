import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    height: 73,
    justifyContent: 'center',
    backgroundColor: COLORS.grey,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  label: {
    fontSize: 10,
    color: COLORS.inputLabel,
    fontFamily: FONTS.interRegular,
  },
  placeholderText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.interRegular,
  },
});
