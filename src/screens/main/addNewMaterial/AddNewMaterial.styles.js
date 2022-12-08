import {COLOR_BACKDROP, COLOR_BACKGROUND} from 'constants/colors';
import {DEFAULT_PADDING_HORIZONTAL, DEVICE_WIDTH} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  cameraBox: {
    width: DEVICE_WIDTH,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_BACKDROP
  },
  camera: {
    width: scalePortrait(70),
    height: scalePortrait(70),
  },
  infoBlocksInput:{
    padding: DEFAULT_PADDING_HORIZONTAL
  },
  sample_image:{
    width: DEVICE_WIDTH,
    height: 250
  }
});
