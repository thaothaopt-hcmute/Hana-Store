import {StyleSheet} from 'react-native';
import {
    BORDER_RADIUS_BUTTON,
  DEFAULT_PADDING_VERTICAL,
  DEFAULT_PADDING_HORIZONTAL,
} from 'constants/size';
import {
  COLOR_BUTTON_BACKGROUND,
  COLOR_LIGHT_CONTENT,
  COLOR_TEXT_PRIMARY,
} from 'constants/colors';
import {FONT_FAMILY, FONT_SIZE} from 'constants/appFonts';

export default StyleSheet.create({
  container: {
    padding: DEFAULT_PADDING_VERTICAL,
    borderRadius: BORDER_RADIUS_BUTTON,
    backgroundColor: COLOR_BUTTON_BACKGROUND,
    margin: DEFAULT_PADDING_HORIZONTAL,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    color: COLOR_LIGHT_CONTENT,
    fontSize: FONT_SIZE.NORMAL,
    fontFamily: FONT_FAMILY.BOLD,
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL
  },
});
