import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  scrollContainer: {
    paddingBottom: 70,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontFamily: FONTS.interMedium,
    color: COLORS.white,
    fontSize: 26,
    textAlign: 'center',
  },
  crown: {
    height: 65,
    width: 108,
    alignSelf: 'center',
  },
  winner: {
    color: COLORS.white,
    fontFamily: FONTS.interMedium,
  },
  text: {
    fontSize: 16,
    fontFamily: FONTS.interRegular,
    color: COLORS.lightGrey75,
  },
  wrapper: {
    width: 173,
    height: 173,
    borderRadius: 86.5,
    backgroundColor: COLORS.level,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 36,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 250,
    marginBottom: 30,
  },
  barContainer: {
    alignItems: 'center',
  },
  playerName: {
    color: '#F6F6F6',
    fontSize: 17,
    fontFamily: FONTS.interRegular,
  },
  bar: {
    width: 100,
    backgroundColor: '#FFF4DA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  pointsContainer: {
    marginBottom: 16,
    marginTop: 8,
    width: 100,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#2B2B2B',
  },
  points: {
    color: '#F6F6F6',
    fontSize: 16,
    fontFamily: FONTS.interRegular,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
});
