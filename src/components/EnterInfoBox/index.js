import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';
import {Input, Icon} from '@rneui/themed';

function EnterInfoBox({label, value, onChangeText}) {
  return (
    <View style={styles.container}>
      <AppText>{label}</AppText>
      <Input placeholder="Pxxxxxxx" onChangeText={onChangeText} />
    </View>
  );
}

export default React.memo(EnterInfoBox);
