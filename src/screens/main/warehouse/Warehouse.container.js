import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import WarehouseView from './Warehouse.view';
import {NAMESPACE} from './Warehouse.constants';
import {getString} from 'utils/i18n';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import {
  allMaterialSelector,
  foundMaterialSelector,
} from 'store/selectors/materialStoreSelector';
import {useActions} from 'hooks/useActions';
import {
  searchMaterialRequest,
  getAllMaterialSubmit,
} from 'store/actions/materialStoreActions';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';

export default function WarehouseContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Store',
    });
  }, [navigation]);

  const actions = useActions({searchMaterialRequest, getAllMaterialSubmit});
  useEffect(() => {
    actions.getAllMaterialSubmit();
  }, [actions]);

  const material = useSelectorShallow(allMaterialSelector);

  useEffect(() => {
    actions.getAllMaterialSubmit();
  }, [actions]);

  const foundMaterial = useSelectorShallow(foundMaterialSelector);

  const onChangeText = useCallback((key) => {
    actions.searchMaterialRequest(key);
  }, [actions]);

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
