import React, {useCallback, useLayoutEffect} from 'react';
import AddNewMaterialView from './AddNewMaterial.view';
import {NAMESPACE} from './AddNewMaterial.constants';
import {getString} from 'utils/i18n';
import { useActions } from 'hooks/useActions';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import {
  addNewMaterialRequest
} from 'store/actions/materialStoreActions';
import { Alert } from 'react-native';
import NavigationServices from 'utils/navigationServices';

export default function AddNewMaterialContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add new detail',
    });
  }, [navigation]);

  const actions = useActions({
    addNewMaterialRequest
  });

  const onPressSubmit = useCallback((values)=>{
    console.warn('values::', values);
    actions.addNewMaterialRequest(values);
    Alert.alert('Alert', 'Update successful', [
      {
        text: 'Yes',
        onPress: () => {
          NavigationServices.goBack();
        },
      },
    ]);
  },[actions])

  return (
    <AddNewMaterialView onPressSubmit={onPressSubmit}/>
  );
}
