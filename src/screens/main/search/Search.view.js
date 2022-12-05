import * as React from 'react';
import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './Search.styles';
// import {NAMESPACE} from './Search.constants';

function SearchView() {
  return (
    <View style={styles.container}>
      <AppText text={'Search'}/>
    </View>
  );
}

export default React.memo(SearchView);
