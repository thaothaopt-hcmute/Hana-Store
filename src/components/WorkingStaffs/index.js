import React from 'react';
import styles from './styles';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import {Avatar, Badge} from '@rneui/base';
import {scale} from 'utils/responsive';
import EmptyList from 'components/EmptyList';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {getWorkSheetOfUserByDaySelector} from 'store/selectors/dbRootSelector';

const Item = ({item, onPress, selectedItem}) => {
  const workSheet = useSelector((state) =>
    getWorkSheetOfUserByDaySelector(
      state,
      item.id,
      moment().format('YYYY-MM-DD'),
    ),
  );
  const {avatar, firstName} = item;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        if (typeof onPress === 'function') {
          onPress(item);
        }
      }}
      style={[styles.item, selectedItem?.id === item.id && styles.selected]}>
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
      {Array.isArray(workSheet) && (
        <View style={styles.badge}>
          <Badge status="success" value={workSheet.length} />
        </View>
      )}
    </TouchableOpacity>
  );
};

function WorkingStaffs({data, onPressItem, selectedItem}) {
  const _renderItem = React.useCallback(
    ({item, index}) => {
      return (
        <Item item={item} onPress={onPressItem} selectedItem={selectedItem} />
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
