import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.inputLabel,
    fontSize: 38,
    fontFamily: FONTS.interMedium,
  },
  white: {
    color: COLORS.white,
  },
});
