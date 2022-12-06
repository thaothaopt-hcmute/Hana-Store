import {Platform, StyleSheet} from 'react-native';
import {COLOR_TEXT_PRIMARY} from 'constants/colors';
import FONT_CONST from 'constants/appFonts';
const {FONT_FAMILY, FONT_SIZE} = FONT_CONST;

/*
  map props to Fontstyles
*/
export function mapPropsToFontStyle(props) {
  // font size (regular, bold, light, ..) (default regular)
  const {small, fit, large} = props;
  // font family (regular, bold, light, ..) (default regular)
  const {bold, light, medium} = props;
  const size = small ? 'small' : fit ? 'fit' : large ? 'large' : 'normal';
  const family = bold
    ? 'bold'
    : light
    ? 'light'
    : medium
    ? 'medium'
    : 'regular';
  const newProps = {
    fontSize: FONT_SIZE[`${size.toUpperCase()}`],
    fontFamily: FONT_FAMILY[`${family.toUpperCase()}`],
  };
  return newProps;
}

export const appShadow = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    ...Platform.select({
      android: {
        borderBottomColor: COLOR_TEXT_PRIMARY,
        borderBottomWidth: 0.5,
      },
    }),
  },

  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
