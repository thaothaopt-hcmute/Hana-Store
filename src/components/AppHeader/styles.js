import {DEFAULT_PADDING_HORIZONTAL} from 'constants/size';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: DEFAULT_PADDING_HORIZONTAL,
    alignItems: 'center',
  },
  iconLeft: {
    marginRight: DEFAULT_PADDING_HORIZONTAL,
  },
});
