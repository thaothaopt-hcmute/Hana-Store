import {FONT_FAMILY, FONT_SIZE} from 'constants/appFonts';
import {COLOR_BACKGROUND} from 'constants/colors';
import {BORDER_RADIUS_BUTTON, DEFAULT_PADDING_VERTICAL} from 'constants/size';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    // padding: DEFAULT_PADDING_VERTICAL,
    // alignItems: 'center',
  },
  logoImage: {
    alignSelf: 'center',
  },
  footerButtons: {
    // flexDirection: 'row',
    backgroundColor: 'black',
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS_BUTTON,
    borderTopRightRadius: BORDER_RADIUS_BUTTON,
  },
  welcomeText: {
    color: '#ffffff',
    alignSelf: 'center',
    marginTop: DEFAULT_PADDING_VERTICAL,
    fontSize: FONT_SIZE.X_LARGE,
    fontFamily: FONT_FAMILY.BOLD,
  },
  loginButton: {
    position: 'absolute',
    right:0, left:0,
    bottom: DEFAULT_PADDING_VERTICAL,
  },
  loginButtonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: FONT_SIZE.FIT,
    fontFamily: FONT_FAMILY.BOLD,
  },
});
