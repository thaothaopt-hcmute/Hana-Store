import React from 'react';
import styles from './styles';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import {Avatar} from '@rneui/base';
import {scale} from 'utils/responsive';
import EmptyList from 'components/EmptyList';

function WorkingStaffs({data, onPressItem, selectedItem}) {
  const _renderItem = React.useCallback(
    ({item, index}) => {
      const {avatar, firstName} = item;
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            if (typeof onPressItem === 'function') {
              onPressItem(item);
            }
          }}
          style={[
            styles.item,
            selectedItem?.id === item.id && styles.selected,
          ]}>
          <Avatar
            size={scale(90)}
            {...{source: avatar ? {uri: avatar} : undefined}}
            title={firstName}
            containerStyle={{backgroundColor: 'grey', marginBottom: scale(10)}}
          />
          <AppText
            numberOfLines={2}
            style={
              styles.nameText
            }>{`${item?.lastName} ${item?.firstName}`}</AppText>
        </TouchableOpacity>
      );
    },
    [selectedItem],
  );
  return (
    <View style={styles.container}>
      <AppText>WorkingStaffs</AppText>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={_renderItem}
        numColumns={2}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}

export default React.memo(WorkingStaffs);
