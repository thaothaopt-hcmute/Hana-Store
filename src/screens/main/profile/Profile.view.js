import * as React from 'react';
import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './Profile.styles';
// import {NAMESPACE} from './Profile.constants';

function ProfileView() {
  return (
    <View style={styles.container}>
      <AppText text={'ProfileView'}/>
    </View>
  );
}

export default React.memo(ProfileView);
