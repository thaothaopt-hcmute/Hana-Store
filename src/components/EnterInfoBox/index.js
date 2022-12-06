import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';
import {Input, Icon} from '@rneui/themed';

function EnterInfoBox({label, value, onChangeText, error, messageError, placeholder}) {
  return (
    <View style={styles.container}>
      <AppText style={styles.labelText}>{label}</AppText>
      {error && <AppText style={styles.txtError}>{messageError}</AppText>}
      <Input placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  );
}

export default React.memo(EnterInfoBox);
