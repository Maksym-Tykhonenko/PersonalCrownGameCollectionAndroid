import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 30,
    paddingBottom: 80,
    gap: 36,
  },
  statusText: {
    color: COLORS.inputLabel,
    fontFamily: FONTS.interRegular,
  },
  support: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.grey,
  },
  title: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: FONTS.interMedium,
  },
  avatar: {
    borderRadius: 68,
    width: 136,
    height: 136,
    alignSelf: 'center',
  },
  edit: {
    position: 'absolute',
    backgroundColor: COLORS.edit,
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
    borderRadius: 15,
    top: 100,
    left: screenWidth / 2,
  },
  inputContainer: {
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
  input: {
    color: COLORS.white,
    fontSize: 16,
  },
});
