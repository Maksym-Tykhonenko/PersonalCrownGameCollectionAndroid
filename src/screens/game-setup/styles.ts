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
  players: {
    flex: 1,
    gap: 16,
    marginTop: 30,
  },
  addPlayer: {
    gap: 12,
    justifyContent: 'flex-start',
    backgroundColor: COLORS.grey,
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 20,
  },
  text: {
    color: COLORS.greyText,
    fontSize: 20,
    fontFamily: FONTS.interRegular,
  },
  addIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightYellow,
    width: 38,
    height: 38,
    borderRadius: 19,
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.grey,
  },
  genderIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGrey30,
    position: 'absolute',
    right: 24,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    fontFamily: FONTS.interRegular,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
});
