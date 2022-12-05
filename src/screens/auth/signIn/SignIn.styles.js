import {FONT_FAMILY, FONT_SIZE} from 'constants/appFonts';
import { COLOR_TEXT_PRIMARY } from 'constants/colors';
import {BORDER_RADIUS, DEFAULT_PADDING_HORIZONTAL} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

const LOGO_SIZE = scalePortrait(150);
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoImage: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    marginTop: DEFAULT_PADDING_HORIZONTAL * 3,
    alignSelf: 'center',
  },
  signinBox: {
    backgroundColor: '#f7efeb',
    margin: DEFAULT_PADDING_HORIZONTAL,
    padding: DEFAULT_PADDING_HORIZONTAL,
    borderRadius: BORDER_RADIUS,
  },
  helloText: {
    fontSize: FONT_SIZE.X_LARGE,
    fontFamily: FONT_FAMILY.BOLD,
    alignSelf: 'center',
    color: COLOR_TEXT_PRIMARY
  },
  signintoText:{
    fontSize: FONT_SIZE.NORMAL,
    fontFamily: FONT_FAMILY.BOLD,
    alignSelf: 'center',
    color: COLOR_TEXT_PRIMARY
  },
  button:{
  },
  noAccountWarnText:{
    fontFamily: FONT_FAMILY.ITALIC,
    alignSelf: 'flex-end',
    fontSize: scalePortrait(10)
  }
});
