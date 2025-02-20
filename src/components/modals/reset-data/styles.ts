import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: COLORS.black25,
  },
  modal: {
    backgroundColor: COLORS.lightYellow,
    paddingHorizontal: 28,
    paddingVertical: 42,
    borderRadius: 20,
  },
  titleContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.interMedium,
    textAlign: 'center',
  },
});
