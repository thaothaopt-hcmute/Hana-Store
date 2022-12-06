import React, {useCallback} from 'react';
import styles from './styles';
import {View, Image, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';

function FuncItem({label, imageSource, onPress}) {
  const _onPress = useCallback(() => {
    typeof onPress === 'function' && onPress();
  }, [onPress]);
  return (
    <TouchableOpacity style={styles.container} onPress={_onPress}>
      <Image source={imageSource} style={styles.image} />
      <AppText style={styles.labelText}>{label}</AppText>
    </TouchableOpacity>
  );
}

export default React.memo(FuncItem);
