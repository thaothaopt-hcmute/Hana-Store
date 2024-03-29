import { FONT_SIZE } from 'constants/appFonts';
import { COLOR_TEXT_PRIMARY } from 'constants/colors';
import {DEFAULT_PADDING_VERTICAL} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
  container: {
    marginVertical: DEFAULT_PADDING_VERTICAL / 2,
  },
  labelText: {
    color: COLOR_TEXT_PRIMARY
  },
  txtError: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    color: 'red',
    fontSize: FONT_SIZE.SMALL - 2,
    fontStyle: 'italic',
    paddingHorizontal: scalePortrait(5),
    marginBottom: -scalePortrait(5),
  },
});
