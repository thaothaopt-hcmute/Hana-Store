import * as React from 'react';
import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './GetStart.styles';
// import {NAMESPACE} from './GetStart.constants';

function GetStartView() {
  return (
    <View style={styles.container}>
      <AppText text={'GetStartView'}/>
    </View>
  );
}

export default React.memo(GetStartView);
