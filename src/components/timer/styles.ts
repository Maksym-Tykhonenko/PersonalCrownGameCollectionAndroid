import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    position: 'absolute',
    color: '#F6F6F6',
    fontSize: 22,
    fontFamily: FONTS.interLight,
  },
});
