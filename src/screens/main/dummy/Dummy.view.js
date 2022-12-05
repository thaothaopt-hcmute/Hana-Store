import * as React from 'react';
import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './Dummy.styles';
// import {NAMESPACE} from './Dummy.constants';

function DummyView() {
  return (
    <View style={styles.container}>
      <AppText text={'DummyView'}/>
    </View>
  );
}

export default React.memo(DummyView);
