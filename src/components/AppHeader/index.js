import React, {useCallback} from 'react';
import styles from './styles';
import {View, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import {Icon} from '@rneui/themed';
import {COLOR_TEXT_PRIMARY} from 'constants/colors';

function AppHeader({title, onPressLeft}) {
  const _onPressLeft = useCallback(
    () => {
      typeof onPressLeft === 'function' && onPressLeft();
    },
    [onPressLeft],
  );
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={_onPressLeft}>
        <Icon
          name={'left'}
          type="antdesign"
          color={COLOR_TEXT_PRIMARY}
          style={styles.iconLeft}
        />
      </TouchableOpacity> */}
      <TouchableOpacity onPress={_onPressLeft}>
        <AppText normal>{title}</AppText>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(AppHeader);
