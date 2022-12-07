import {COLOR_BACKGROUND} from 'constants/colors';
import {DEFAULT_PADDING_VERTICAL} from 'constants/size';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  flatlist: {
    marginTop: DEFAULT_PADDING_VERTICAL,
  },
});
