import {FONT_FAMILY, FONT_SIZE} from 'constants/appFonts';
import {DEFAULT_PADDING_HORIZONTAL} from 'constants/size';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  chartText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
  },
  seeDetail: {
    padding: DEFAULT_PADDING_HORIZONTAL,
  },
  seeDetailText: {
    textDecorationLine: 'underline',
  },
});
