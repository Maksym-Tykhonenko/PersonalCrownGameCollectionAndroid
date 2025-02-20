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
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: 173,
    height: 173,
    borderRadius: 100,
    backgroundColor: COLORS.level,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 36,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: FONTS.interMedium,
    textAlign: 'center',
  },
});
