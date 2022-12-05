import * as React from 'react';
import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './Settings.styles';
// import {NAMESPACE} from './Settings.constants';

function SettingsView() {
  return (
    <View style={styles.container}>
      <AppText text={'SettingsView'}/>
    </View>
  );
}

export default React.memo(SettingsView);
