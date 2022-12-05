import { BORDER_RADIUS } from 'constants/size';
import {StyleSheet} from 'react-native';
import { scalePortrait } from 'utils/responsive';

export default StyleSheet.create({
  container: {},
  item: {
    aspectRatio: 1,
    width: scalePortrait(100),
    height:scalePortrait(100),
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS

  },
});
