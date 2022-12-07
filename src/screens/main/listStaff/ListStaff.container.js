import React, {useLayoutEffect, useCallback} from 'react';
import ListStaffView from './ListStaff.view';
import {NAMESPACE} from './ListStaff.constants';
import {getString} from 'utils/i18n';

export default function ListStaffContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  const onChangeText = useCallback((text)=>{
  },[])

  return <ListStaffView onChangeText={onChangeText}/>;
}
