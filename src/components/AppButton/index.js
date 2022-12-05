import React, {useCallback} from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import {Icon} from '@rneui/themed';
import {COLOR_LIGHT_CONTENT} from 'constants/colors';

function AppButton({title, iconName, onPress, style}) {
  const _onPressButton = useCallback(() => {
    typeof onPress == 'function' && onPress();
  }, [onPress]);
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={_onPressButton}>
      {iconName && (
        <Icon name={iconName} type="antdesign" color={COLOR_LIGHT_CONTENT} />
      )}
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  );
}

export default React.memo(AppButton);
