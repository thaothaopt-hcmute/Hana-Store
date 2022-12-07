import {FONT_FAMILY, FONT_SIZE} from 'constants/appFonts';
import {
  COLOR_BACKGROUND,
  COLOR_BUTTON_BACKGROUND,
  COLOR_DELETE_BTN,
  COLOR_DISABLED,
  COLOR_LIGHT_CONTENT,
  COLOR_SECONDARY,
} from 'constants/colors';
import {DEFAULT_PADDING_HORIZONTAL} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';
import {appShadow} from 'utils/styleHelper';

export default StyleSheet.create({
  wrapOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginVertical: DEFAULT_PADDING_HORIZONTAL / 2,
    marginHorizontal: DEFAULT_PADDING_HORIZONTAL,
    backgroundColor: COLOR_BACKGROUND,
    ...appShadow.shadow,
  },
  content: {
    flexDirection: 'row',
    width: '100%',
  },
  nameText: {
    textTransform: 'capitalize',
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.NORMAL,
  },
  countText: {
    fontFamily: FONT_FAMILY.REGULAR,
    textTransform: 'capitalize',
  },
  image: {
    width: scalePortrait(60),
    height: scalePortrait(60),
  },
  colRight: {
    marginLeft: DEFAULT_PADDING_HORIZONTAL,
  },
  desText: {
    fontFamily: FONT_FAMILY.ITALIC,
  },
  rightButton: {
    backgroundColor: COLOR_DELETE_BTN,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  leftButton: {
    backgroundColor: COLOR_BUTTON_BACKGROUND,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  wrapDeactivated: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLOR_DISABLED,
    padding: scalePortrait(4),
    borderRadius: scalePortrait(4),
  },
  txtStatus: {
    color: 'white',
    fontStyle: 'italic',
  },
});
