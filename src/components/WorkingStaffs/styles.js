import {COLOR_LIGHT_CONTENT, COLOR_SECONDARY} from 'constants/colors';
import {
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scale} from 'utils/responsive';

export default StyleSheet.create({
  container: {flex: 1},
  selected: {
    borderColor: 'green',
  },
  item: {
    backgroundColor: '#f7efeb',
    padding: DEFAULT_PADDING_HORIZONTAL,
    width: scale(150),
    height: scale(150),
    margin: DEFAULT_PADDING_VERTICAL / 2,
    alignItems: 'center',
    borderRadius: scale(4),
    borderWidth: scale(2),
    borderColor: 'transparent',
  },
  nameText: {},
  list: {
    flex: 1,
  },
  badge: {
    position: 'absolute',
    right: 0,
  },
});
