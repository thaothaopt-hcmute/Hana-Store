import * as React from 'react';
import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './SavedIdioms.styles';
// import {NAMESPACE} from './SavedIdioms.constants';

function SavedIdiomsView() {
  return (
    <View style={styles.container}>
      <AppText text={'SavedIdioms'}/>
    </View>
  );
}

export default React.memo(SavedIdiomsView);
