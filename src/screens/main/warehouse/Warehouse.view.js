import * as React from 'react';
import {View, FlatList, Alert} from 'react-native';
import AppText from 'components/AppText';
import styles from './Warehouse.styles';
import SearchBox from 'components/SearchBox';
import MaterialItem from './components/MaterialItem';
import EmptyListComponent from 'components/EmptyListComponent';
import {FAB} from '@rneui/themed';
import {deactivateMaterialRequest, deleteMaterialRequest} from 'store/actions/materialStoreActions';
import { STATUS } from 'constants/appConstants';
import { useActions } from 'hooks/useActions';

// import {NAMESPACE} from './Warehouse.constants';

function WarehouseView({onChangeText, foundMaterial, onPressItem}) {
  const actions = useActions({deactivateMaterialRequest, deleteMaterialRequest});

  const onPressDelete = (item) => {
    Alert.alert('Alert', 'Are you sure that you want to delete this item?', [
      {
        text: 'No',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: () => {
          actions.deleteMaterialRequest({id: item.id});
        },
      },
    ]);
  };

  const onPressDeactivate = (item, currentStatus) => {
    Alert.alert(
      'Alert',
      `Are you sure that you want to ${
        currentStatus === STATUS.ACTIVE ? 'deactivate' : 'active'
      } this item?`,
      [
        {
          text: 'No',
          onPress: () => {},
        },
        {
          text: 'Yes',
          onPress: () => {
            actions.deactivateMaterialRequest({id: item.id, currentStatus});
          },
        },
      ],
    );
  };
  const _renderItem = React.useCallback(({item, index}) => {
    return (
      <MaterialItem
        item={item}
        onPressItem={onPressItem}
        onPressDisable={onPressDeactivate}
        onPressDelete={onPressDelete}
      />
    );
  }, []);
  const keyExtractor = React.useCallback(
    (item, index) => (item.id || index).toString(),
    [],
  );
  const _ListEmptyComponent = React.useCallback(({}) => {
    return <EmptyListComponent title={'No matching results'} />;
  }, []);

 

  return (
    <View style={styles.container}>
      <AppText text={'Warehouse'} />
      <SearchBox onChangeText={onChangeText} />

      <FlatList
        data={foundMaterial}
        renderItem={_renderItem}
        keyExtractor={keyExtractor}
        style={styles.flatlist}
        ListEmptyComponent={_ListEmptyComponent}
      />
    </View>
  );
}

export default React.memo(WarehouseView);
