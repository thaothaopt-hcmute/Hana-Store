
import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';


function InfoByRow() {
  return (
    <View style={styles.container}>
       <AppText>InfoByRow</AppText>
    </View>
  );
}

export default React.memo(InfoByRow);
