import React, {useCallback, useRef} from 'react';
import styles from './styles';
import {View, TouchableOpacity, TextInput} from 'react-native';
import AppText from 'components/AppText';
import {Icon} from '@rneui/themed';

function SearchBox({onChangeText}) {
  const _onChangeText = useCallback(
    (text) => {
      typeof onChangeText === 'function' && onChangeText(text);
    },
    [onChangeText],
  );

  const textInputRef = React.useRef();
  const _onPressClose = useCallback(() => {
    textInputRef.current.clear();
    typeof onChangeText === 'function' && onChangeText('');
  }, [onChangeText]);

  return (
    <View style={styles.container}>
      {/* <Icon
        name="search"
        type="evilicon"
        // color='#517fa4'
      /> */}
      <TextInput
        ref={textInputRef}
        style={styles.textInput}
        placeholder={'Type...'}
        onChangeText={_onChangeText}
      />
      {/* <Icon
        name="close"
        type="evilicon"
        // color='#517fa4'
        onPress={_onPressClose}
      /> */}
      <TouchableOpacity onPress={_onPressClose}>
      <AppText>Cancel</AppText>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(SearchBox);
