
import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';


function EmptyListComponent({title}) {
  return (
    <View style={styles.container}>
       <AppText large style={styles.title}>{title||"Danh sách rỗng"}</AppText>
    </View>
  );
}

export default React.memo(EmptyListComponent);
