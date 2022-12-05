import {FONT_FAMILY} from 'constants/appFonts';
import {COLOR_LIGHT_CONTENT, COLOR_TEXT_PRIMARY} from 'constants/colors';
import {
  BORDER_RADIUS,
  DEFAULT_PADDING_VERTICAL,
  DEFAULT_PADDING_HORIZONTAL,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';
import { COLOR_BACKGROUND } from '../../../../../constants/colors';
import {appShadow} from '../../../../../utils/styleHelper';

export default StyleSheet.create({
  container: (index, isSelected) => ({
    backgroundColor: COLOR_BACKGROUND,
    borderRadius: BORDER_RADIUS,
    width: scalePortrait(170),
    height: scalePortrait(190),
    alignItems: 'center',
    marginVertical: DEFAULT_PADDING_VERTICAL,
    borderColor: COLOR_TEXT_PRIMARY,
    borderWidth: isSelected ? 2 : 0,
    marginLeft: ((index % 2) * DEFAULT_PADDING_HORIZONTAL) / 1.5,
    ...appShadow.cardShadow,
  }),
  imageView: {
    width: scalePortrait(165),
    height: scalePortrait(150),
    borderRadius: BORDER_RADIUS,
  },
  nameText: {
    color: COLOR_TEXT_PRIMARY,
    fontFamily: FONT_FAMILY.MEDIUM,
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL / 2,
    paddingVertical: DEFAULT_PADDING_VERTICAL / 2,
  },
});
