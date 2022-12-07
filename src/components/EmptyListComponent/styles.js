import {FONT_FAMILY, FONT_SIZE} from 'constants/appFonts';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.MEDIUM,
    width: scalePortrait(200),
    textAlign: 'center',
  },
});
