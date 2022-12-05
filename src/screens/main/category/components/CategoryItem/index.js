import React, {useCallback} from 'react';
import styles from './styles';
import {Image, TouchableOpacity, Text} from 'react-native';
import AppText from 'components/AppText';

function CategoryItem({item, index, onPress}) {
  const {image, name_vi, isSelected} = item || {};
  const _onPress = useCallback(() => {
    typeof onPress === 'function' && onPress(item);
  }, [item, onPress]);
  return (
    <TouchableOpacity
      style={[styles.container(index, isSelected), styles.bgShadow]}
      onPress={_onPress}>
      <Image source={{uri: image}} style={styles.imageView} />
      <AppText
        style={styles.nameText}
        numberOfLines={1}>
        {name_vi}
        </AppText>
    </TouchableOpacity>
  );
}

export default React.memo(CategoryItem);
