
import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';


function AppAdMobBanner() {
  return (
    <View style={styles.container}>
       <AppText>AppAdMobBanner</AppText>
    </View>
  );
}

export default React.memo(AppAdMobBanner);
