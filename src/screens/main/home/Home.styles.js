import {COLOR_BACKGROUND} from 'constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  disableFuncView: {
    backgroundColor: 'rgba(123,213,23,0.5)',
    position: 'absolute'
  },
});
