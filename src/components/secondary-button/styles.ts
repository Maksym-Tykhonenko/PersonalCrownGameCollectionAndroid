import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.gradientStart,
    borderWidth: 2,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.interSemiBold,
    color: COLORS.gradientStart,
    paddingHorizontal: 24,
  },
  cancelButton: {
    backgroundColor: COLORS.white,
  },
  cancelText: {
    color: COLORS.black,
  },
});
