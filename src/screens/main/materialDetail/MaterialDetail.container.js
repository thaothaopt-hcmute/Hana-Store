import React, {useCallback, useLayoutEffect, useEffect} from 'react';
import MaterialDetailView from './MaterialDetail.view';
import {NAMESPACE} from './MaterialDetail.constants';
import {getString} from 'utils/i18n';
import NavigationServices, {getParams} from 'utils/navigationServices';
import moment from 'moment';
import {useActions} from 'hooks/useActions';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import {getMaterialDetailSelector} from 'store/selectors/materialStoreSelector';
import {
  getMaterialDetailRequest,
  updateMaterialDetailRequest,
  getAllMaterialSubmit,
} from 'store/actions/materialStoreActions';
import {Alert} from 'react-native';

export default function MaterialDetailContainer({navigation, route}) {
  const params = getParams(route);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: params.name.toLocaleUpperCase(),
    });
  }, [navigation]);
  const actions = useActions({
    getMaterialDetailRequest,
    updateMaterialDetailRequest,
    getAllMaterialSubmit
  });

  const materialDetail = useSelectorShallow(getMaterialDetailSelector);

  useEffect(() => {
    actions.getMaterialDetailRequest(params.id);
  }, [actions]);

  const onPressSubmit = useCallback((values) => {
    console.log('values::', values, materialDetail);
    actions.updateMaterialDetailRequest({
      id: materialDetail.id,
      count: parseInt(values.quantity) + parseInt(materialDetail.count),
      last_import: moment().format('YYYY-MM-DD hh:mm:ss a'),
    });
    Alert.alert('Alert', 'Update successful', [
      {
        text: 'Yes',
        onPress: () => {
          actions.getAllMaterialSubmit();
          actions.getMaterialDetailRequest(params.id);
          // NavigationServices.goBack();
        },
      },
    ]);
  }, [actions, materialDetail]);

  return (
    <MaterialDetailView
      materialDetail={materialDetail}
      onPressSubmit={onPressSubmit}
    />
  );
}
