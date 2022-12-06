
import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';


function SearchBox() {
  return (
    <View style={styles.container}>
       <AppText>SearchBox</AppText>
    </View>
  );
}

export default React.memo(SearchBox);
