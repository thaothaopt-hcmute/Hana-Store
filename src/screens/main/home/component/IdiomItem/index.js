import React from 'react';
import styles from './styles';
import {View, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import AppImage from 'components/AppImage';

function IdiomItem({item, onPressItem}) {
  console.log('item::', item);
  const {idiom_en, image} = item;
  return (
    <View style={styles.container}>
      <AppImage source={image} imageStyle={styles.imageStyle} />
      <View style={styles.right}>
        <AppText fit style={styles.idiom_en}>
          {idiom_en}
        </AppText>
        <TouchableOpacity>
          <AppText style={styles.detail}>{'Xem thêm chi tiết'}</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default React.memo(IdiomItem);
