import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';

function EmptyList(props) {
  const {style} = props;
  return (
    <View style={[styles.container, style]}>
      <AppText bold>No item</AppText>
    </View>
  );
}

export default React.memo(EmptyList);
