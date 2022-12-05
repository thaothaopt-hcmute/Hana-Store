import React from 'react';
import styles from './styles';
import {View, SafeAreaView} from 'react-native';
import AppText from 'components/AppText';

function AppContainer({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default React.memo(AppContainer);
