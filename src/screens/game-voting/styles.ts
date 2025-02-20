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
  title: {
    color: COLORS.white,
    fontSize: 28,
    fontFamily: FONTS.interMedium,
    textAlign: 'center',
  },
  question: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.interRegular,
    marginTop: 50,
    marginBottom: 22,
  },
  text: {
    color: COLORS.greyText,
    fontSize: 20,
    fontFamily: FONTS.interRegular,
  },
  playerOption: {
    backgroundColor: '#292A2E',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#F6F6F6',
    backgroundColor: COLORS.inputLabel,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioSelected: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: COLORS.gradientStart,
  },
  error: {
    color: 'red',
    fontSize: 16,
    fontFamily: FONTS.interRegular,
    textAlign: 'center',
    marginBottom: 20,
  },
});
