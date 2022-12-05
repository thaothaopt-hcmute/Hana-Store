import {
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {COLOR_BACKGROUND} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  button: {
    marginHorizontal: DEFAULT_PADDING_HORIZONTAL,
    marginVertical: DEFAULT_PADDING_VERTICAL,
  },
  flatList: {
    alignItems: 'center',
  },
});
