import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';
import {Input, Icon} from '@rneui/themed';

function EnterInfoBox({
  label,
  value,
  onChangeText,
  error,
  messageError,
  placeholder,
  keyboardType,
  ...otherProps
}) {
  const inputRef = React.useRef();

  return (
    <View style={styles.container}>
      <AppText style={styles.labelText}>{label}</AppText>
      {error && <AppText style={styles.txtError}>{messageError}</AppText>}
      <Input
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType || 'default'}
        {...otherProps}
      />
    </View>
  );
}

export default React.memo(EnterInfoBox);
