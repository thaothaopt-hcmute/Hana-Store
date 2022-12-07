import React, {useCallback, useLayoutEffect, useState} from 'react';
import WarehouseView from './Warehouse.view';
import {NAMESPACE} from './Warehouse.constants';
import {getString} from 'utils/i18n';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import {
  allMaterialSelector,
  foundMaterialSelector,
} from 'store/selectors/materialStoreSelector';
import {useActions} from 'hooks/useActions';
import {searchMaterialRequest} from 'store/actions/materialStoreActions';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';

export default function WarehouseContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Store',
    });
  }, [navigation]);

  const actions = useActions({searchMaterialRequest});

  const material = useSelectorShallow(allMaterialSelector);

  const foundMaterial = useSelectorShallow(foundMaterialSelector);

  const onChangeText = useCallback((key) => {
    actions.searchMaterialRequest(key);
  }, []);
  const onPressItem = useCallback((item) => {
    NavigationServices.navigate(SCREENS_NAME.MATERIAL_DETAIL, item);
  }, []);
  return (
    <WarehouseView
      onChangeText={onChangeText}
      foundMaterial={foundMaterial || material}
      onPressItem={onPressItem}
    />
  );
}
