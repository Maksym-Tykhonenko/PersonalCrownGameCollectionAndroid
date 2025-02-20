import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.interRegular,
  },
  levels: {
    flex: 1,
    gap: 22,
    marginTop: 30,
  },
  levelsContent: {
    backgroundColor: COLORS.level,
    borderRadius: 20,
    paddingHorizontal: 26,
    paddingVertical: 16,
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  text: {
    color: COLORS.greyText,
    fontSize: 20,
    fontFamily: FONTS.interRegular,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.grey,
  },
  levelTitle: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 26,
    color: COLORS.white,
    fontFamily: FONTS.interMedium,
  },
  description: {
    fontSize: 16,
    color: COLORS.greyText,
    fontFamily: FONTS.interRegular,
    marginBottom: 24,
  },
});
