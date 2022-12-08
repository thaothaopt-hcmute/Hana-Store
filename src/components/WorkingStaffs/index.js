import React from 'react';
import styles from './styles';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';

function WorkingStaffs({data}) {
  const _renderItem = React.useCallback(({item, index}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <AppText style={styles.nameText}>{`${item?.lastName} ${item?.firstName}`}</AppText>
      </TouchableOpacity>
    );
  }, []);
  return (
    <View style={styles.container}>
      <AppText>WorkingStaffs</AppText>
      <FlatList data={data} renderItem={_renderItem} numColumns={2} />
    </View>
  );
}

export default React.memo(WorkingStaffs);
