import {COLOR_BACKGROUND} from 'constants/colors';
import {DEFAULT_PADDING_VERTICAL} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scale} from 'utils/responsive';

export default StyleSheet.create({
  root: {
    display: 'flex',
    backgroundColor: COLOR_BACKGROUND,
    paddingHorizontal: DEFAULT_PADDING_VERTICAL
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: DEFAULT_PADDING_VERTICAL,
  },
  btnEdit: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'yellow',
    width: scale(30),
    height: scale(30),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{}
});
