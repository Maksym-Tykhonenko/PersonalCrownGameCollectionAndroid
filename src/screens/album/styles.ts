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
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONTS.interMedium,
    textAlign: 'center',
    marginBottom: 12,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.interRegular,
    textAlign: 'center',
    marginBottom: 36,
  },
  photoContainer: {
    justifyContent: 'space-between',
  },
  photoWrapper: {
    position: 'relative',
    margin: 5,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  deleteIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    marginBottom: 70,
  },
});
