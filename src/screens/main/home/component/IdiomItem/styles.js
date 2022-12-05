import {FONT_FAMILY, FONT_SIZE} from 'constants/appFonts';
import {
  COLOR_BACKDROP,
  COLOR_BACKGROUND,
  COLOR_TEXT_LINK,
  COLOR_TEXT_PRIMARY,
} from 'constants/colors';
import {BORDER_RADIUS, DEFAULT_PADDING_HORIZONTAL} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';
import {appShadow} from 'utils/styleHelper';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: COLOR_TEXT_PRIMARY,
    // borderWidth: 1,
    margin: DEFAULT_PADDING_HORIZONTAL,
    backgroundColor: COLOR_BACKDROP,
  },
  imageStyle: {
    width: scalePortrait(75),
    height: scalePortrait(75),
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    marginRight: DEFAULT_PADDING_HORIZONTAL,
  },
  right: {
    flex: 1,
  },
  idiom_en: {
    fontSize: FONT_SIZE.FIT,
    color: COLOR_TEXT_PRIMARY,
    fontFamily: FONT_FAMILY.MEDIUM,
  },
  detail: {
    fontSize: FONT_SIZE.SMALL,
    textDecorationLine: 'underline',
    color: COLOR_TEXT_LINK,
    alignSelf: 'flex-end',
    fontFamily: FONT_FAMILY.ITALIC,
    paddingRight: DEFAULT_PADDING_HORIZONTAL,
  },
});
