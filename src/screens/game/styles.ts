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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 24,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.grey,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.interMedium,
  },
  taskContainer: {
    backgroundColor: '#2B2B2B',
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  task: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONTS.interMedium,
    textAlign: 'center',
  },
  taskDescription: {
    color: COLORS.lightGrey75,
    fontSize: 18,
    fontFamily: FONTS.interMedium,
    textAlign: 'center',
  },
});
