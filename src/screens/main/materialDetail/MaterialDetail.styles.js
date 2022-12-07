import {FONT_FAMILY, FONT_SIZE} from 'constants/appFonts';
import {COLOR_BACKGROUND, COLOR_TEXT_PRIMARY} from 'constants/colors';
import {
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
  DEVICE_HEIGHT,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  image: {
    width: '100%',
    height: scalePortrait(300),
  },
  countLabel: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.FIT,
  },
  detailInfoContainer: {
    padding: DEFAULT_PADDING_HORIZONTAL,
  },
  dropLine1: {
    height: 1,
    backgroundColor: COLOR_TEXT_PRIMARY,
    marginTop: DEFAULT_PADDING_VERTICAL,
  },
  dropLine2: {
    height: 1,
    backgroundColor: COLOR_TEXT_PRIMARY,
    marginTop: DEFAULT_PADDING_VERTICAL / 3,
    marginBottom: DEFAULT_PADDING_VERTICAL
  },
  enterForm:{
    width: DEVICE_HEIGHT
  }
});
