import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { COLOR_BACKGROUND, COLOR_TEXT_PRIMARY } from 'constants/colors';
import { DEFAULT_PADDING_HORIZONTAL } from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';
import { appShadow } from 'utils/styleHelper';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: DEFAULT_PADDING_HORIZONTAL,
    margin: DEFAULT_PADDING_HORIZONTAL,
    backgroundColor: COLOR_BACKGROUND,
    width: scalePortrait(150),
    height: scalePortrait(150),
    ...appShadow.shadow
  },
  image: {
    width: scalePortrait(100),
    height: scalePortrait(100),
  },
  labelText:{
    fontSize: FONT_SIZE.X_LARGE,
    color: COLOR_TEXT_PRIMARY,
    fontFamily: FONT_FAMILY.BOLD
  }
});
