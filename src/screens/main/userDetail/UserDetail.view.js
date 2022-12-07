import * as React from 'react';
import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './UserDetail.styles';
// import {NAMESPACE} from './UserDetail.constants';

function UserDetailView() {
  return (
    <View style={styles.container}>
      <AppText text={'UserDetail'}/>
    </View>
  );
}

export default React.memo(UserDetailView);
