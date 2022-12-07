import * as React from 'react';
import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './ListStaff.styles';
import SearchBox from 'components/SearchBox';
// import {NAMESPACE} from './ListStaff.constants';

function ListStaffView({onChangeText, listStaff}) {
  console.warn(listStaff);
  return (
    <View style={styles.container}>
      <AppText text={'ListStaff'} />
      <SearchBox onChangeText={onChangeText} />
    </View>
  );
}

export default React.memo(ListStaffView);
