import * as React from 'react';
import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './ListStaff.styles';
// import {NAMESPACE} from './ListStaff.constants';

function ListStaffView() {
  return (
    <View style={styles.container}>
      <AppText text={'ListStaff'}/>
    </View>
  );
}

export default React.memo(ListStaffView);
