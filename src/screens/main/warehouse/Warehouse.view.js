import * as React from 'react';
import {View, FlatList} from 'react-native';
import AppText from 'components/AppText';
import styles from './Warehouse.styles';
import SearchBox from 'components/SearchBox';
import MaterialItem from './components/MaterialItem';
import EmptyListComponent from 'components/EmptyListComponent';
// import {NAMESPACE} from './Warehouse.constants';

function WarehouseView({onChangeText, foundMaterial, onPressItem}) {
  const _renderItem = React.useCallback(({item, index}) => {
    return <MaterialItem item={item} onPressItem={onPressItem}/>;
  }, []);
  const keyExtractor = React.useCallback(
    (item, index) => (item.id || index).toString(),
    [],
  );
  const _ListEmptyComponent = React.useCallback(({}) => {
    return <EmptyListComponent title={'No matching results'}/>;
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
